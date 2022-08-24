class StoreData {
  constructor() {
    this.data = this.load();
  }

  save = (data) => {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }

  load = () => JSON.parse(localStorage.getItem('userInfo')) || {};

  clear = () => {
    localStorage.removeItem('userInfo');
  }

  get = (key) => this.data[key];
}

const storage = new StoreData();
export default storage;
