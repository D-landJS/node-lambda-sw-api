import { PeopleSPResponseEN } from '../interfaces';

export interface PeopleDatabaseRepository {
	create(peopleSwapiResponse: PeopleSPResponseEN): Promise<number>;
	verifyIfExist(name: string): Promise<boolean>;
	getByName(name: string): Promise<PeopleSPResponseEN[]>;
}
