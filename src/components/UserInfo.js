export default class UserInfo {
    constructor({ placeForName, placeForProfession }) {
      // если в конструкторе получить объект с селекторами элементов, 
      // то код перестает работать( Прошу подсказать как лучше исправить код
      // (если еще есть необходимость поправить код)
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