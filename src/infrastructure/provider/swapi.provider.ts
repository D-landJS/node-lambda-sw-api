import {
	PeopleSPResponseEN,
	ResponseProvider,
	SWPResponse,
} from '../../domain/interfaces';

export interface SwapiProvider {
	searchPeople(
		word: string
	): Promise<ResponseProvider<SWPResponse<PeopleSPResponseEN>>>;
}
