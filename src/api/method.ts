import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

type ResponseError<E = any> = AxiosError<E> | null;
type ResponseSuccess<T = any> = T | null;
type ResponseAPI<E = any, T = any> = [
  ResponseError<E>,
  ResponseSuccess<T>,
  AxiosResponse<T>?,
];

export const instance = axios.create({
  baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon',
});

instance.defaults.headers.common['Content-Type'] = 'application/json';

export const get = async <E = any, T = any>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<ResponseAPI<E, T>> => {
  try {
    const request: AxiosResponse<T> = await instance.get(url, config);
    return [null, request.data, request];
  } catch (error) {
    return [error, null];
  }
};

export const post = async <E = any, T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<ResponseAPI<E, T>> => {
  try {
    const request: AxiosResponse<T> = await instance.post(url, data, config);
    return [null, request.data, request];
  } catch (error) {
    return [error, null];
  }
};

export const put = async <E = any, T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<ResponseAPI<E, T>> => {
  try {
    const request: AxiosResponse<T> = await instance.put(url, data, config);
    return [null, request.data, request];
  } catch (error) {
    return [error, null];
  }
};

export const del = async <E = any, T = any>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<ResponseAPI<E, T>> => {
  try {
    const request: AxiosResponse<T> = await instance.delete(url, config);
    return [null, request.data, request];
  } catch (error) {
    return [error, null];
  }
};
