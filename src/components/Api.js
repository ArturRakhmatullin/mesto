class Api {
    constructor(options) {
      // тело конструктора
    }
  
    getInitialCards() {
      return fetch('https://mesto.nomoreparties.co/v1/cohort-50/cards', {
        headers: {
          authorization: '602fce52-47ee-402a-b2dd-b2ee3d1cac69'
        }
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        });
    } 

  // другие методы работы с API
}
  
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-50',
    headers: {
      authorization: '602fce52-47ee-402a-b2dd-b2ee3d1cac69',
      'Content-Type': 'application/json'
    }
  });