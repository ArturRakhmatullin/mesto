export default class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }

    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    }

    getProfileInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
          "method": "GET",
          "headers": this._headers,
      })
      .then(this._checkResponse)
    }

    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
        method: "GET",
        headers: this._headers,
      })
        .then(this._checkResponse);
    }

    editProfile(name, about) {
      return fetch(`${this._baseUrl}/users/me`, {
          "method": "PATCH",
          "headers": this._headers,
          "body": JSON.stringify({
              name: `${name}`,
              about: `${about}`,
          })
      })
      .then(this._checkResponse);
    }

    editAvatar(avatar) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
          "method": "PATCH",
          "headers": this._headers,
          "body": JSON.stringify({
              avatar: `${avatar}`,
          })
      })
      .then(this._checkResponse)
    }

    addCard(name, link) {
      return fetch(`${this._baseUrl}/cards`, {
          "method": "POST",
          "headers": this._headers,
          "body": JSON.stringify({
              name: `${name}`,
              link: `${link}`,
          })
      })
      .then(this._checkResponse);
    }

    removeCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
          "method": "DELETE",
          "headers": this._headers,
      })
      .then(this._checkResponse)
    }

    addLike(cardId) {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
          "method": "PUT",
          "headers": this._headers
      })
      .then(this._checkResponse)
    }

    removeLike(cardId) {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
          "method": "DELETE",
          "headers": this._headers
      })
      .then(this._checkResponse)
    }

  // другие методы работы с API
}