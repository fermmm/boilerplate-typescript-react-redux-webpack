import { useHttpRequest, UseHttpRequestResponse } from './tools/httpRequest';

/**
 * This is an example of a function to make an http request to an endpoint.
 * It makes a request to a real open API with data about the Star Wars movies.
 */
export const useExampleApiRequest = (): StarWarsFilmsResponse => {
   const [requestResponse, sendRequest] = useHttpRequest<StarWarsApiResult>();
   return [requestResponse, () => sendRequest(`https://swapi.dev/api/films/`)];
};

export type StarWarsFilmsResponse = [
   requestResponse: UseHttpRequestResponse<StarWarsApiResult>,
   sendRequest: () => void
];

/**
 * These are the type definitions of the JSON that comes from the endpoint, it was generated using:
 * https://jvilk.com/MakeTypes/
 */
export interface StarWarsApiResult {
   count: number;
   next?: null;
   previous?: null;
   results?: {
      title: string;
      episode_id: number;
      opening_crawl: string;
      director: string;
      producer: string;
      release_date: string;
      characters?: string[];
      planets?: string[];
      starships?: string[];
      vehicles?: string[];
      species?: string[];
      created: string;
      edited: string;
      url: string;
   }[];
}
