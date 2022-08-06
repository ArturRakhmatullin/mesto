import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImgEl = this._popupEl.querySelector('.popup__image');
    this._popupCaptionEl = this._popupEl.querySelector('.popup__name');
  }

  open(title, src) {
    this._popupImgEl.alt = title;
    this._popupCaptionEl.textContent = title;
    this._popupImgEl.src = src;
    super.open();
  }
}