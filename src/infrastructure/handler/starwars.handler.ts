import { inject, injectable } from 'inversify';
import { APIGatewayEvent } from 'aws-lambda';
import { CreateRequest } from './request/create.request';
import { GetSearchParameters } from './parameters/get-search-parameters';
import { ApiGatewayResponse } from '../../application/response/api-gateway-response';
import { PeopleService } from '../../application/service/people.service';
import { TYPES } from '../../di/types';
import { HTTP } from '../../utils/enum';
import { ErrorHandler } from '../../utils/error.util';

@injectable()
export class StarwarsHandler {
	constructor(
		@inject(TYPES.StarWarsService) private peopleService: PeopleService
	) {}

	async create(event: APIGatewayEvent): Promise<ApiGatewayResponse> {
		try {
			const body = JSON.parse(event?.body || '{}');
			const createReq: CreateRequest = new CreateRequest(body);
			const res = await this.peopleService.create(createReq);
			return new ApiGatewayResponse(HTTP.STATUS_CODE_201, res);
		} catch (e) {
			const handledError = ErrorHandler.handleKnownErrors(e);

			if (handledError === null) {
				return ErrorHandler.generateInternalServerErrorResponse(e);
			}

			return handledError;
		}
	}

	async get(event: APIGatewayEvent): Promise<ApiGatewayResponse> {
		try {
			const getSearchParameters: GetSearchParameters = new GetSearchParameters(
				(event.queryStringParameters as any) || {}
			);
			const res = await this.peopleService.getByName(getSearchParameters);
			return new ApiGatewayResponse(HTTP.STATUS_CODE_200, res);
		} catch (e) {
			if (ErrorHandler.handleKnownErrors(e)) return e.res;
			return ErrorHandler.generateInternalServerErrorResponse(e);
		}
	}
}
