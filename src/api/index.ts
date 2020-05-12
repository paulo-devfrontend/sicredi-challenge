import { get, post, put, del } from './method';

type DateJSONString = string;

type DragonType = 'epic' | 'rare' | 'legendary';

interface DragonData {
  name: string;
  type: DragonType;
  histories: string[];
  imageUrl: string;
}

interface Dragon extends DragonData {
  id: number;
  createdAt: DateJSONString;
}

type DragonList = Dragon[];

export default {
  list: () => get<any, DragonList>('/'),
  detail: (id: number) => get<any, Dragon>(`/${id}`),
  create: (data: DragonData) => post('/', data),
  edit: (id: number, data: DragonData) => put(`/${id}`, data),
  remove: (id: number) => del(`/${id}`),
};
