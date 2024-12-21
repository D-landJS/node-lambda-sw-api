import {
	IsDefined,
	IsString,
	Length,
	ValidationArguments,
} from 'class-validator';
import { MESSAGE_ERRORS_FIELDS_GENERIC } from '../../../common/constants/errors.constans';
import { MIN_WORD, MAX_WORD } from '../../../utils/constants';

export class GetSearchParameters {
	@IsDefined({
		message: ({ property }: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.NOT_DEFINED(property),
	})
	@Length(MIN_WORD, MAX_WORD, {
		message: (validationArguments: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.STRING_LENGTH(
				validationArguments,
				MIN_WORD,
				MAX_WORD
			),
	})
	@IsString({
		message: (validationArguments: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.NOT_STRING(validationArguments),
	})
	name: string;

	constructor(params: unknown) {
		Object.assign(this, params);
	}
}
