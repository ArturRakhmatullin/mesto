import { popupBigScreen, fullscreenImg, popupName, openPopup } from './index.js'; 

class Card {
    constructor(name, link, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
			.content.querySelector('.elements__card')
			.cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._cardImage  = this._element.querySelector('.elements__photo');
        this._setEventListeners();
        this._element.querySelector('.elements__cardname').textContent = this._name;
        this._cardImage.alt = this._name;
        this._element.querySelector('.elements__photo').src = this._link;
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.elements__photo').addEventListener('click', () => { this._handleOpenFullPhotoPopup(popupBigScreen); });
        this._element.querySelector('.elements__like').addEventListener('click', (event) => { this._handleLikeClick(event); });
        this._element.querySelector('.elements__delete').addEventListener('click', (event) => { this._handleDeleteButton(event); });
    }

    _handleOpenFullPhotoPopup(popupBigScreen) {
        fullscreenImg.src = this._link;
        fullscreenImg.alt = this._name;
        popupName.textContent = this._name;
        openPopup(popupBigScreen);
    }

    _handleLikeClick(event) {
        event.target.classList.toggle('elements__like_active');
    }

    _handleDeleteButton() {
        this._element.remove();
    }
}

export { Card };