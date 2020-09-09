import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

/**
 * Axios request wrapper with error handling.
 * @param options Axios request options, example: {url: "search/users"}
 */
export async function httpRequest<T>(options: AxiosRequestConfig): Promise<HttpRequestResponse<T>> {
   const client: AxiosInstance = axios.create({});

   let promiseResolve: (
      value?: HttpRequestResponse<T> | PromiseLike<HttpRequestResponse<T>>
   ) => void = null;
   const resultPromise: Promise<HttpRequestResponse<T>> = new Promise(resolve => {
      promiseResolve = resolve;
   });

   try {
      const response: AxiosResponse<T> = await client(options);
      promiseResolve({ success: true, content: response.data });
   } catch (error) {
      if (error.response) {
         // Request was made but server responded with something
         // other than 2xx
         promiseResolve({
            success: false,
            error: { message: error.response.data?.error?.message, code: error.response.status },
         });
      } else {
         // Something else happened while setting up the request
         // triggered the error
         promiseResolve({ success: false, error: { message: error.message, code: 0 } });
      }
   }

   return resultPromise;
}

/**
 * Wraps httpRequest() as a hook
 *
 * Usage:
 *
 * const [{ data, isLoading, isError, errorMessage }, sendRequest] = useHttpRequest();
 *
 * doFetch(`http://api-site.com/api/query=${query}`)
 */
export const useHttpRequest = <T>() => {
   const [data, setData] = useState<T>();
   const [url, setUrl] = useState<string>();
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   const [errorMessage, setErrorMessage] = useState<string>();
   let mounted: boolean = true;

   useEffect(() => {
      const fetchData = async () => {
         setIsError(false);
         setIsLoading(true);

         const result = await httpRequest<T>({ url });
         if (!mounted) {
            return;
         }

         if (result.success) {
            setData(result.content);
         } else {
            setIsError(true);
            setErrorMessage(result.error.message);
         }

         setIsLoading(false);
      };

      fetchData();
      return () => (mounted = false);
   }, [url]);

   return [{ data, isLoading, isError, errorMessage }, setUrl] as [
      requestResponse: UseHttpRequestResponse<T>,
      sendRequest: React.Dispatch<React.SetStateAction<string>>
   ];
};

export interface UseHttpRequestResponse<T> {
   data: T;
   isLoading: boolean;
   isError: boolean;
   errorMessage: string;
}

export interface HttpRequestResponse<T> {
   success: boolean;
   error?: HttpRequestError;
   content?: T;
}

export interface HttpRequestError {
   code: number;
   message: string;
}
