import { Container } from 'inversify';
import { ENV, HOST, TIMEOUT } from '../utils/enum';
import { ConnectionMysqlDatabase } from '../database/connections/implements/connection.mysql.database';
import { ConnectionDatabase } from '../database/connection.database';

import { TAG } from '../utils/tag';
import { TYPES } from './types';
import { HttpConnector } from '../utils/http-connector';
import { PeopleServiceImpl } from '../application/service/implements/people.service.impl';
import { PeopleService } from '../application/service/people.service';
import { ConfigDatabase } from '../domain/interfaces';
import { SwapiProviderImpl } from '../infrastructure/provider/impl/swapi.provider.impl';
import { SwapiProvider } from '../infrastructure/provider/swapi.provider';
import { PeopleDatabaseMysqlRepositoryImpl } from '../infrastructure/repository/implements/people.database.mysql.repository.impl';
import { PeopleDatabaseRepository } from '../infrastructure/repository/people.database.repository';
import { DataMapper } from '../infrastructure/datasources/data-mapper';
import { StarwarsHandler } from '../infrastructure/handler/starwars.handler';

export class ContainerFactory {
	private static container: Container;

	public static createContainer(): Container {
		if (!this.container) {
			this.container = new Container();

			const swapiApiConnector = new HttpConnector({
				host: HOST.SWAPI,
				timeout: TIMEOUT.PROVIDER,
			});

			const dbConfig: ConfigDatabase = {
				host: process.env[ENV.DATABASE_MYSQL_HOST],
				user: process.env[ENV.DATABASE_MYSQL_USER],
				password: process.env[ENV.DATABASE_MYSQL_PASSWORD],
				database: process.env[ENV.DATABASE_MYSQL_NAME],
			};

			const connectionMysqlDatabase: ConnectionMysqlDatabase =
				new ConnectionMysqlDatabase(dbConfig);

			this.container
				.bind<ConnectionDatabase>(TYPES.CoreClientDatabase)
				.toConstantValue(connectionMysqlDatabase);

			this.container
				.bind<PeopleDatabaseRepository>(TYPES.DatabaseRepository)
				.to(PeopleDatabaseMysqlRepositoryImpl);

			this.container
				.bind<SwapiProvider>(TYPES.SwapiProvider)
				.to(SwapiProviderImpl);

			this.container
				.bind<HttpConnector>(TYPES.HttpConnector)
				.toConstantValue(swapiApiConnector)
				.whenTargetNamed(TAG.SWAPI_PROD);

			this.container.bind<DataMapper>(TYPES.DataMapper).to(DataMapper);

			this.container
				.bind<StarwarsHandler>(TYPES.StarWarsHandler)
				.to(StarwarsHandler);

			this.container
				.bind<PeopleService>(TYPES.StarWarsService)
				.to(PeopleServiceImpl);
		}

		return this.container;
	}
}
