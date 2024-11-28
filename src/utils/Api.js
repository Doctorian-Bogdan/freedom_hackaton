import axios from 'axios';

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(response) {
    if (response.status === 200) {
      return response.data;
    }

    return Promise.reject(`Ошибка: ${response.status}`);
  }

  getCoordinates() {
    return axios.get('https://geocode-maps.yandex.ru/1.x/?apikey=ce5958e3-ce1b-4a67-8004-92c3b789d321&geocode=бульвар+Мухаммед+Бин+Рашид+1&format=json', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkResponse(res));
  }
}

const api = new Api({
  baseUrl: 'http://localhost:8080',
});

export default api;
