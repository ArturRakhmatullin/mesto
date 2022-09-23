import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { callbackSubmitForm } ) {
    super(popupSelector);
    this._callbackSubmitForm = callbackSubmitForm;
    this._formEl = this._popupEl.querySelector('.popup__form');
    this._inputList = this._popupEl.querySelectorAll('.popup__info');
    this._submitButton = this._popupEl.querySelector('.popup__submit');
    this._submitButtonText = this._submitButton.textContent;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formEl.addEventListener('submit', (event) => {
      event.preventDefault();
      this._callbackSubmitForm(this._getInputValues());
    });
    //    this._formEl.addEventListener('submit', () => {
      // перед запросом сохраняем изначальный текст кнопки
    //  const initialText = this._submitButton.textContent;
      // меняем его, чтобы показать пользователю ожидание
    //  this._submitButton.textContent = 'Сохранение...';
    //  this._callbackSubmitForm(this._getInputValues())
    //    .then(() => this.close()) // закрывается попап в `then`
    //    .finally(() => {
    //      this._submitButton.textContent = initialText;
    //    }) // в любом случае меняется текст кнопки обратно на начальный в `finally`
    //});
  }

  _getInputValues() {
    const data = {};
    this._inputList.forEach((el) => {
      data[el.name] = el.value;
    });
    return data;
  }

  loading(isLoading) {
    if(isLoading) {
        this._submitButton.textContent = 'Сохранение...';
    } else {
        this._submitButton.textContent = this._submitButtonText;
    }
}

  close() {
    super.close();
    this._formEl.reset();
  }
}