import { inject, injectable, named } from 'inversify';
import { SwapiProvider } from '../swapi.provider';
import { TYPES } from '../../../di/types';
import {
	ResponseProvider,
	SWPResponse,
	PeopleSPResponseEN,
} from '../../../domain/interfaces';
import { HttpConnector } from '../../../utils';
import { TAG } from '../../../utils/tag';

@injectable()
export class SwapiProviderImpl implements SwapiProvider {
	constructor(
		@inject(TYPES.HttpConnector)
		@named(TAG.SWAPI_PROD)
		private httpConnector: HttpConnector
	) {}

	public async searchPeople(
		word: string
	): Promise<ResponseProvider<SWPResponse<PeopleSPResponseEN>>> {
		const endpoint: string = `/api/people/?search=${word}`;
		const {
			statusCode,
			body,
		}: ResponseProvider<SWPResponse<PeopleSPResponseEN>> =
			await this.httpConnector.get(endpoint);
		return { statusCode, body };
	}
}
