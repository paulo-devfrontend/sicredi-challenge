import API, { DragonList, DragonData } from 'api';

const STORAGE = '_dragons';

class DragonsModel {
  private set data(value: DragonList) {
    localStorage.setItem(STORAGE, JSON.stringify(value));
  }

  private get data() {
    const _data = localStorage.getItem(STORAGE);
    return _data && JSON.parse(_data);
  }

  public async update() {
    const [error, data] = await API.list();
    if (error) {
      console.error(error);
    }
    if (data) {
      this.data = data;
      return true;
    }
    return false;
  }

  public list() {
    return this.data.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }

  public byId(id: string) {
    return this.data.find(dragon => dragon.id === id);
  }

  public availableTypes() {
    const _types = new Set(this.data.map(entry => entry.type));
    return Array.from(_types);
  }

  public async save(data: DragonData) {
    const [error, result] = await API.create(data);
    if (error) return false;
    if (result) return true;
    return false;
  }
}

export default new DragonsModel();
