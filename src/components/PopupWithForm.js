import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { callbackSubmitForm } ) {
    super(popupSelector);
    this._callbackSubmitForm = callbackSubmitForm;
    this._formEl = this._popupEl.querySelector('.popup__form');
    this._inputList = this._popupEl.querySelectorAll('.popup__info');
    this._submitButton = this._popupEl.querySelectorAll('.popup__submit');
    this._submitButtonText = this._submitButton.textContent;
  }

  loading(text) {
    if(text) {
        this._submitButton.textContent = 'Сохранение...';
    } else {
        this._submitButton.textContent = this._submitButtonText;
    }
}

  _getInputValues() {
    const data = {};
    this._inputList.forEach((el) => {
      data[el.name] = el.value;
    });
    return data;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formEl.addEventListener('submit', (event) => {
      event.preventDefault();
      this._callbackSubmitForm(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._formEl.reset();
  }
}