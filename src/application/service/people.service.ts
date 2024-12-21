import { PeopleSwapiResponseES } from '../../domain/interfaces';
import { GetSearchParameters } from '../../infrastructure/handler/parameters/get-search-parameters';
import { CreateRequest } from '../../infrastructure/handler/request/create.request';

export interface PeopleService {
	create(createRequest: CreateRequest): Promise<PeopleSwapiResponseES>;
	getByName(
		getParameters: GetSearchParameters
	): Promise<PeopleSwapiResponseES[]>;
}
