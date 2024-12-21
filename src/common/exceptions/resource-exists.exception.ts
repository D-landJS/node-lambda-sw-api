import { ApiGatewayResponse } from '../../application/response/api-gateway-response';
import { HTTP } from '../../utils/enum';

import { ERRORS } from '../constants/errors.constans';

export class ResourceExistsException extends Error {
	public readonly statusCode: number = HTTP.STATUS_CODE_409;

	public declare response: ApiGatewayResponse;

	constructor(public originDescription: string, value: string) {
		super();
		this.response = new ApiGatewayResponse(
			this.statusCode,
			ERRORS.BAD_REQUEST_IS_IT_EXISTS(value)
		);
	}
}
