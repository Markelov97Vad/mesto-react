class Api {
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  }

  _getPromise(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(res.status)
  }

  getCards () {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
      .then(res =>  this._getPromise(res))
  }

  getProfile () {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
    .then( res =>  this._getPromise(res))
  }

  addProfile (data) {
      return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: data.username,
          about: data.info
        })
      })
      .then( res =>  this._getPromise(res))
  }

  addCard(data) {
    return fetch(`${this._url}/cards `, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then( res =>  this._getPromise(res));
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then( res =>  this._getPromise(res))
  }

  likeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then( res =>  this._getPromise(res))
  }

  disLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then( res =>  this._getPromise(res))
  }
  
  addAvatar (data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then( res =>  this._getPromise(res))
  }
}

const api = new Api ({
  url: 'https://nomoreparties.co/v1/cohort-58/',
  headers: {
    authorization: '3a547c89-4deb-4ce7-94f8-c49690def692',
    "Content-Type": "application/json",
  }
});

export default api