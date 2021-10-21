class Storage {
  constructor(nameOfStorage) {
    this._ls = localStorage;
    this._nameOfStorage = nameOfStorage;
    this._storage = JSON.parse(this._ls.getItem(nameOfStorage));

    if (!this._storage) {
      this._storage = this._resetStorage();
    }
  }
  _updateStorage() {
    this._ls.setItem(this._nameOfStorage, JSON.stringify(this._storage));
  }
  _resetStorage() {
    const data = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    this._ls.clear();
    this._ls.setItem(this._nameOfStorage, JSON.stringify(data));
    return data;
  }
  set(value) {
    this._storage.push(value);
    this._updateStorage();
  }
  get(prop, value) {
    return this._storage.filter(element => element[prop] === value);
  }
  remove(prop, value) {
    this._storage = this._storage.filter(element => element[prop] !== value);
    this._updateStorage();
  }
  getAll() {
    return this._storage;
  }
}

export default Storage;
