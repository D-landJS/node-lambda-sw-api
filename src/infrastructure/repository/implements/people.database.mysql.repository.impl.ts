import { injectable, inject } from 'inversify';
import { PeopleDatabaseRepository } from '../people.database.repository';
import { ConnectionDatabase } from '../../../database/connection.database';
import { MySQL_QUERIES } from '../../../database/queries/mysql.queries';
import { TYPES } from '../../../di/types';
import { PeopleSPResponseEN, DatabaseResult } from '../../../domain/interfaces';
import { POSITION } from '../../../utils/enum';

@injectable()
export class PeopleDatabaseMysqlRepositoryImpl
	implements PeopleDatabaseRepository
{
	constructor(
		@inject(TYPES.CoreClientDatabase) private coreClientDb: ConnectionDatabase
	) {}

	public async create(
		peopleSwapiResponse: PeopleSPResponseEN
	): Promise<number> {
		const query = MySQL_QUERIES.CREATE;
		const [result] = await this.coreClientDb
			.pool()
			.query(query, peopleSwapiResponse);
		const id: number = (<DatabaseResult>result).insertId;
		return id;
	}

	public async verifyIfExist(name: string): Promise<boolean> {
		const query = MySQL_QUERIES.VERIFY_IS_EXIST;
		const params = [name?.toLowerCase().trim()];
		const [result] = await this.coreClientDb.pool().query(query, params);
		return !!result[POSITION.SECOND];
	}

	public async getByName(name: string): Promise<PeopleSPResponseEN[]> {
		const query = MySQL_QUERIES.GET_BY_NAME;
		const params = [name?.toLowerCase()?.trim()];
		const [result] = await this.coreClientDb.pool().query(query, params);
		return <PeopleSPResponseEN[]>result;
	}
}
