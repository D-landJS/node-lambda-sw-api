import { ValidationArguments } from 'class-validator';
import { ERROR_OBJECT, ERROR_TYPE } from '../../utils/enum';
import { Util } from '../../utils/util';

export const MESSAGE_ERRORS_FIELDS_GENERIC = {
	NOT_DEFINED: (nameField: string): string =>
		`El campo '${nameField}' es requerido y no puede estar vacío.`,
	ARRAY_MIN_LENGTH: ({ property }: ValidationArguments): string =>
		`El campo '${property}' debe contener al menos un elemento en la lista.`,
	STRING_LENGTH: (
		{ property }: ValidationArguments,
		min: number,
		max: number
	): string =>
		`El campo '${property}' debe tener entre '${min}' y '${max}' caracteres.`,
	NOT_ARRAY: ({ property }: ValidationArguments): string =>
		`El valor del campo '${property}' no es válido; se esperaba un arreglo.`,
	NOT_STRING: ({ property, value }: ValidationArguments): string =>
		`El campo '${property}' debe ser una cadena de texto, pero se recibió un valor de tipo '${Util.getTypeValue(
			value
		)}'.`,
};

export const ERRORS = {
	INTERNAL_SERVER: {
		object: ERROR_OBJECT.ERROR,
		type: ERROR_TYPE.API,
		message: `Se produjo un error inesperado en el servidor.`,
	},
	NOT_FOUND_FROM_DATABASE: {
		object: ERROR_OBJECT.ERROR,
		type: ERROR_TYPE.NOT_FOUND,
		message: `No se hallaron registros en la base de datos.`,
	},
	NOT_FOUND_FROM_PROVIDER: {
		object: ERROR_OBJECT.ERROR,
		type: ERROR_TYPE.NOT_FOUND,
		message: `El proveedor no devolvió ningún resultado.`,
	},
	BAD_REQUEST: {
		object: ERROR_OBJECT.ERROR,
		type: ERROR_TYPE.PARAMETER_ERROR,
		message: `La solicitud contiene parámetros incorrectos.`,
	},
	BAD_REQUEST_IS_IT_EXISTS: (name: string): object => ({
		object: ERROR_OBJECT.ERROR,
		type: ERROR_TYPE.DUPLICATE_RECORD,
		message: `El registro '${name}' ya existe en el sistema.`,
	}),
	PATH_NOT_FOUND: {
		object: ERROR_OBJECT.ERROR,
		type: ERROR_TYPE.API,
		message: `No se encontró la ruta especificada.`,
	},
};
