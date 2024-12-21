import 'reflect-metadata';
import { Context, Handler } from 'aws-lambda';
import { config } from 'dotenv';
import { ContainerFactory } from './di/container';
import { TYPES } from './di/types';
import { ApiGatewayResponse } from './application/response/api-gateway-response';
import { StarwarsHandler } from './infrastructure/handler/starwars.handler';

config();

const container = ContainerFactory.createContainer();

export const handlerCreate: Handler = async (
	event: any,
	context: Context
): Promise<ApiGatewayResponse> => {
	context.callbackWaitsForEmptyEventLoop = false;
	const starWarsHandler: StarwarsHandler = container.get<StarwarsHandler>(
		TYPES.StarWarsHandler
	);
	return starWarsHandler.create(event);
};

export const handlerGet: Handler = async (
	event: any,
	context: Context
): Promise<ApiGatewayResponse> => {
	context.callbackWaitsForEmptyEventLoop = false;
	const starWarsHandler: StarwarsHandler = container.get<StarwarsHandler>(
		TYPES.StarWarsHandler
	);
	return starWarsHandler.get(event);
};
