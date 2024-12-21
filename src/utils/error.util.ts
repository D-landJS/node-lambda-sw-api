import { $log } from 'ts-log-debug';
import { HTTP } from './enum';
import { ERRORS } from '../common/constants/errors.constans';
import {
	BadRequestException,
	BodyBadRequestException,
	InternalServerErrorException,
	NotFoundProviderException,
	ResourceExistsException,
} from '../common/exceptions';
import { ApiGatewayResponse } from '../application/response/api-gateway-response';

export class ErrorHandler {
	/**
	 * Captura errores específicos y los registra si corresponden.
	 * @param error Instancia del error capturado.
	 * @returns El mismo error si es uno esperado o `null` si no aplica.
	 */
	public static handleKnownErrors(error: Error): ApiGatewayResponse {
		if (error instanceof NotFoundProviderException) {
			$log.error(
				`${error.originDescription} | Error`,
				JSON.stringify(error.response)
			);
			return new ApiGatewayResponse(HTTP.STATUS_CODE_404, {
				message: error.message,
			});
		}

		if (
			error instanceof BadRequestException ||
			error instanceof BodyBadRequestException
		) {
			$log.error(
				`${error.originDescription} | Error`,
				JSON.stringify(error.response)
			);
			return new ApiGatewayResponse(HTTP.STATUS_CODE_400, {
				message: error.message,
			});
		}

		if (error instanceof ResourceExistsException) {
			$log.error(
				`${error.originDescription} | Error`,
				JSON.stringify(error.response)
			);
			return new ApiGatewayResponse(HTTP.STATUS_CODE_409, {
				message: error.name,
				details: error.originDescription,
			});
		}

		if (error instanceof InternalServerErrorException) {
			$log.error(
				`${error.originDescription} | Error`,
				JSON.stringify(error.response)
			);
			return new ApiGatewayResponse(HTTP.STATUS_CODE_500, {
				message: error.message,
			});
		}
		return null;
	}

	/**
	 * Genera y registra una respuesta estandarizada para errores internos del servidor (500).
	 * @param error Detalles del error.
	 * @returns Respuesta HTTP estandarizada.
	 */
	public static generateInternalServerErrorResponse(
		error: Error
	): ApiGatewayResponse {
		const { name, message, stack } = error;

		const response: ApiGatewayResponse = new ApiGatewayResponse(
			HTTP.STATUS_CODE_500,
			ERRORS.INTERNAL_SERVER
		);
		$log.error(`Exception:`, JSON.stringify({ name, message, stack }));
		$log.error(`Error 500 Response:`, JSON.stringify(response));

		return response;
	}
}
