export default class UserInfo {
    constructor({ placeForName, placeForProfession }) {
      this._placeForName = placeForName;
      this._placeForProfession = placeForProfession;
    }
  
    getUserInfo() {
      return {
        placeForName: this._placeForName.textContent,
        placeForProfession: this._placeForProfession.textContent,
       };
    }
  
    setUserInfo(info) {
      this._placeForName.textContent = info.placeForName;
      this._placeForProfession.textContent = info.placeForProfession;
    }
  }