import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupNameEl = this._popupEl.querySelector('.popup__name');
    this._popupImgEl = this._popupEl.querySelector('.popup__image');
  }

  open(name, link) {
    super.open();
    this._popupNameEl.textContent = name;
    this._popupImgEl.alt = name;
    this._popupImgEl.src = link;
  }
}