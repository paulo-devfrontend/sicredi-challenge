import { get, post, put, del } from './method';

type DateJSONString = string;

export type DragonType = 'epic' | 'rare' | 'legendary';

export interface DragonData {
  name: string;
  type: DragonType;
  histories: string[];
  imageUrl: string;
}

export interface Dragon extends DragonData {
  id: number;
  createdAt: DateJSONString;
}

export type DragonList = Dragon[];

export default {
  list: () => get<any, DragonList>('/'),
  detail: (id: number) => get<any, Dragon>(`/${id}`),
  create: (data: DragonData) => post('/', data),
  edit: (id: number, data: DragonData) => put(`/${id}`, data),
  remove: (id: number) => del(`/${id}`),
};
