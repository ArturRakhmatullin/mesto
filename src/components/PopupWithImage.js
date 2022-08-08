import { Popup } from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupNameEl = this._popupEl.querySelector('.popup__name');
    this._popupImgEl = this._popupEl.querySelector('.popup__image');
  }

  open(data) {
    super.open();
    this._popupNameEl.textContent = data.alt;
    this._popupImgEl.alt = data.alt;
    this._popupImgEl.src = data.src;
  }
}