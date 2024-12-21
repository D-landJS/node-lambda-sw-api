import {
	ArrayMinSize,
	IsArray,
	IsDefined,
	IsString,
	Length,
	ValidationArguments,
} from 'class-validator';
import { MESSAGE_ERRORS_FIELDS_GENERIC } from '../../../common/constants/errors.constans';
import { PeopleSPResponseEN } from '../../../domain/interfaces';
import { MIN_WORD, MAX_WORD } from '../../../utils/constants';
import { NUM } from '../../../utils/enum';

export class CreateRequest implements PeopleSPResponseEN {
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
	height: string;

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
	mass: string;

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
	hair_color: string;

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
	skin_color: string;

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
	eye_color: string;

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
	birth_year: string;

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
	gender: string;

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
	homeworld: string;

	@ArrayMinSize(NUM.ONE, {
		message: (validationArguments: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.ARRAY_MIN_LENGTH(validationArguments),
	})
	@Length(MIN_WORD, MAX_WORD, {
		each: true,
		message: (validationArguments: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.STRING_LENGTH(
				validationArguments,
				MIN_WORD,
				MAX_WORD
			),
	})
	@IsArray({
		message: (validationArguments: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.NOT_ARRAY(validationArguments),
	})
	@IsString({
		each: true,
		message: (validationArguments: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.NOT_STRING(validationArguments),
	})
	films: string[] | object;

	@ArrayMinSize(NUM.ONE, {
		message: (validationArguments: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.ARRAY_MIN_LENGTH(validationArguments),
	})
	@Length(MIN_WORD, MAX_WORD, {
		each: true,
		message: (validationArguments: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.STRING_LENGTH(
				validationArguments,
				MIN_WORD,
				MAX_WORD
			),
	})
	@IsArray({
		message: (validationArguments: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.NOT_ARRAY(validationArguments),
	})
	@IsString({
		each: true,
		message: (validationArguments: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.NOT_STRING(validationArguments),
	})
	species: string[] | object;

	@ArrayMinSize(NUM.ONE, {
		message: (validationArguments: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.ARRAY_MIN_LENGTH(validationArguments),
	})
	@Length(MIN_WORD, MAX_WORD, {
		each: true,
		message: (validationArguments: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.STRING_LENGTH(
				validationArguments,
				MIN_WORD,
				MAX_WORD
			),
	})
	@IsArray({
		message: (validationArguments: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.NOT_ARRAY(validationArguments),
	})
	@IsString({
		each: true,
		message: (validationArguments: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.NOT_STRING(validationArguments),
	})
	vehicles: string[] | object;

	@ArrayMinSize(NUM.ONE, {
		message: (validationArguments: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.ARRAY_MIN_LENGTH(validationArguments),
	})
	@Length(MIN_WORD, MAX_WORD, {
		each: true,
		message: (validationArguments: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.STRING_LENGTH(
				validationArguments,
				MIN_WORD,
				MAX_WORD
			),
	})
	@IsArray({
		message: (validationArguments: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.NOT_ARRAY(validationArguments),
	})
	@IsString({
		each: true,
		message: (validationArguments: ValidationArguments) =>
			MESSAGE_ERRORS_FIELDS_GENERIC.NOT_STRING(validationArguments),
	})
	starships: string[] | object;

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
	url: string;

	created?: Date = new Date();

	edited?: Date = new Date();

	constructor(params: PeopleSPResponseEN) {
		Object.assign(this, params);
		if (typeof params.name === 'string') {
			this.name = params?.name?.toLowerCase().trim();
		}
	}
}
