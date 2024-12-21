import axios, { AxiosInstance } from 'axios';
import { ResponseProvider } from '../domain/interfaces/provider-response.interface';
import { DataMapper } from '../infrastructure/datasources/data-mapper';

interface HttppConnectorConfig {
	host: string;
	timeout: number;
}
export class HttpConnector {
	private axiosInstance: AxiosInstance;

	constructor(private readonly config: HttppConnectorConfig) {
		this.axiosInstance = axios.create({
			baseURL: this.config.host,
			timeout: this.config.timeout,
		});
	}

	async get<T>(
		path: string,
		headers: object = {}
	): Promise<ResponseProvider<T>> {
		try {
			const {
				data,
				status,
				headers: headerResponse,
				config,
				request,
			} = await this.axiosInstance.get(path, { headers });
			return {
				statusCode: DataMapper.parseStatusCode(String(status)),
				body: data,
				config,
				headers: headerResponse,
				request,
			};
		} catch (error) {
			return {
				statusCode: DataMapper.parseStatusCode(String(error.response?.status)),
				body: error.response?.data,
				headers: error.response?.headers,
				config: error.response?.config,
				request: error.response?.request,
			};
		}
	}
}
