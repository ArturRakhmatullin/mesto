import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmitForm, callbackOpenForm) {
    super(popupSelector);
    this._callbackSubmitForm = callbackSubmitForm;
    this._callbackOpenForm = callbackOpenForm;
    this._formEl = this._popupEl.querySelector('.popup__form');
    this._inputList = this._popupEl.querySelectorAll('.popup__info');
  }

  _getInputValues() {
    const data = {};
    this._inputList.forEach(el => {
      data[el.name] = el.value;
    });
    return data;
  }

  setEventListeners() {
    this._formEl.addEventListener('submit', (event) => {
      event.preventDefault();
      this._callbackSubmitForm(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }

  close() {
    this._formEl.reset();
    super.close();
  }

  open() {
    this._callbackOpenForm();
    super.open();
  }
}