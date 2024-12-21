import { inject, injectable } from 'inversify';
import { PeopleService } from '../people.service';
import {
	ResourceExistsException,
	BadRequestException,
	NotFoundProviderException,
} from '../../../common/exceptions';
import { TYPES } from '../../../di/types';
import { PeopleModel } from '../../../domain/models/people.model';
import { SwapiProvider } from '../../../infrastructure/provider/swapi.provider';
import { PeopleDatabaseRepository } from '../../../infrastructure/repository/people.database.repository';
import { Dto } from '../../../utils/dto';
import { NUM, HTTP } from '../../../utils/enum';
import {
	PeopleSwapiResponseES,
	PeopleSPResponseEN,
} from '../../../domain/interfaces';
import { GetSearchParameters } from '../../../infrastructure/handler/parameters/get-search-parameters';
import { CreateRequest } from '../../../infrastructure/handler/request/create.request';

@injectable()
export class PeopleServiceImpl implements PeopleService {
	constructor(
		@inject(TYPES.DatabaseRepository)
		private peopleRepository: PeopleDatabaseRepository,
		@inject(TYPES.SwapiProvider)
		private swapiProvider: SwapiProvider
	) {}

	public async create(
		createRequest: CreateRequest
	): Promise<PeopleSwapiResponseES> {
		await Dto.validateRequest(createRequest);
		await this.peopleRepository.create(
			PeopleModel.parsePersonToSaveDatabase(createRequest)
		);
		const exists: boolean = await this.peopleRepository.verifyIfExist(
			createRequest.name
		);
		if (exists) {
			throw new ResourceExistsException(
				`El registro '${createRequest.name}' existe.`,
				createRequest.name
			);
		}
		return PeopleModel.translateToSpanish(createRequest);
	}

	public async getByName(
		getParameters: GetSearchParameters
	): Promise<PeopleSwapiResponseES[]> {
		await Dto.validateRequest(getParameters);
		const peopleDatabaseResponses: PeopleSPResponseEN[] =
			await this.peopleRepository.getByName(getParameters.name);
		if (peopleDatabaseResponses.length >= NUM.ONE) {
			return peopleDatabaseResponses.map((people: PeopleSPResponseEN) =>
				PeopleModel.parseDatabaseToResponse(
					PeopleModel.translateToSpanish(people)
				)
			);
		}
		const peopleResponse: PeopleSPResponseEN[] = await this.searchPeopleByWord(
			getParameters.name
		);
		return peopleResponse.map(people => PeopleModel.translateToSpanish(people));
	}

	private async searchPeopleByWord(
		word: string
	): Promise<PeopleSPResponseEN[]> {
		const { statusCode, body } = await this.swapiProvider.searchPeople(word);
		if (statusCode !== HTTP.STATUS_CODE_200)
			throw new BadRequestException(`bad request value: ${word}`);
		if (body.count === NUM.ZERO)
			throw new NotFoundProviderException(`Not found value: ${word}`);
		return body.results;
	}
}
