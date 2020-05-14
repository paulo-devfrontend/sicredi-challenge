import { get, post, put, del } from './method';

type DateJSONString = string;

export interface DragonData {
  name: string;
  type: string;
  histories?: string[] | string;
  imageUrl?: string;
}

export interface Dragon extends DragonData {
  id: string;
  createdAt: DateJSONString;
}

export type DragonList = Dragon[];

export default {
  list: () => get<any, DragonList>('/'),
  detail: (id: string) => get<any, Dragon>(`/${id}`),
  create: (data: DragonData) => post('/', data),
  edit: (id: string, data: DragonData) => put(`/${id}`, data),
  remove: (id: string) => del(`/${id}`),
};
