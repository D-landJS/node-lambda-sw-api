import { ApiGatewayResponse } from '../../application/response/api-gateway-response';
import { HTTP } from '../../utils/enum';

import { ERRORS } from '../constants/errors.constans';

export class InternalServerErrorException extends Error {
	public readonly statusCode: number = HTTP.STATUS_CODE_500;

	public declare response: ApiGatewayResponse;

	constructor(public originDescription: string = '') {
		super();
		this.response = new ApiGatewayResponse(
			this.statusCode,
			ERRORS.INTERNAL_SERVER
		);
	}
}
