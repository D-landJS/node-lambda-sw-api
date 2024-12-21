import { ApiGatewayResponse } from '../../application/response/api-gateway-response';
import { HTTP } from '../../utils/enum';
import { ERRORS } from '../constants/errors.constans';

export class NotFoundProviderException extends Error {
	public readonly statusCode: number = HTTP.STATUS_CODE_404;

	public declare response: ApiGatewayResponse;

	constructor(public originDescription: string = '') {
		super();
		this.response = new ApiGatewayResponse(
			this.statusCode,
			ERRORS.NOT_FOUND_FROM_PROVIDER
		);
	}
}
