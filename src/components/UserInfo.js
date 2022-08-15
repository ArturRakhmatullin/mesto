export default class UserInfo {
    constructor({ placeForName, placeForProfession }) {
      this._placeForName = document.querySelector(placeForName);
      this._placeForProfession = document.querySelector(placeForProfession);
    }
  
    getUserInfo() {
      return {
        name: this._placeForName.textContent,
        profession: this._placeForProfession.textContent,
       };
    }
  
    setUserInfo({name, profession}) {
      this._placeForName.textContent = name;
      this._placeForProfession.textContent = profession;
    }
  }