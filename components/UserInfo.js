export class UserInfo {
    constructor({ name, profession }) {
      this._userNameEl = document.querySelector(name);
      this._userProfessionEl = document.querySelector(profession);
    }
  
    getUserInfo() {
      return {
        userName: this._userNameEl.textContent,
        userProfession: this._userProfessionEl.textContent
      }
    }
  
    setUserInfo({ userName, userProfession }) {
      this._userNameEl.textContent = userName;
      this._userProfessionEl.textContent = userProfession;
    }
  }