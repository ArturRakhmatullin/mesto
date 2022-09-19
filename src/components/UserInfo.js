export default class UserInfo {
    constructor({ placeForName, placeForProfession, avatarImg }) {
      this._placeForName = document.querySelector(placeForName);
      this._placeForProfession = document.querySelector(placeForProfession);
      this._avatar = document.querySelector(avatarImg);
    }
  
    getUserInfo() {
      return {
        name: this._placeForName.textContent,
        about: this._placeForProfession.textContent,
        avatar: this._avatar.src,
       };
    }
  
    setUserInfo(data) {
      this._placeForName.textContent = data.name;
      this._placeForProfession.textContent = data.about;
      this._id = data._id;
      this._avatar.src = data.avatar;
    }

    setUserAvatar(data) {
      this._avatar.src = data.avatar;
    }

    getUserId() {
      return this._id;
    }
  }