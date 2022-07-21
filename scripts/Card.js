import { popupBigScreen, fullscreenImg, openPopup, closePopupByEsc } from './index.js';
export { initialCards, Card, renderCards };

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

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
        this._setEventListeners();
        this._element.querySelector('.elements__cardname').textContent = this._name;
        this._element.querySelector('.elements__photo').src = this._link;
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.elements__photo').addEventListener('click', () => { this._handleOpenFullPhotoPopup(popupBigScreen); });
        this._element.querySelector('.elements__like').addEventListener('click', () => { this._handleLikeClick(event); });
        this._element.querySelector('.elements__delete').addEventListener('click', () => { this._handleDeleteButton(event); });
    }


    _handleOpenFullPhotoPopup(popupBigScreen) {
        fullscreenImg.src = this._link;
        fullscreenImg.alt = this._name;
        document.querySelector('.popup__name').textContent = this._name;
        openPopup(popupBigScreen);
        document.addEventListener('keyup', closePopupByEsc);
    }

    _handleLikeClick(event) {
        event.target.classList.toggle('elements__like_active');
    }

    _handleDeleteButton(event) {
        const bin = event.target.closest('.elements__card');
        bin.remove();
    }
}

const renderCards = initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, '#elements');
    const cardElement = card.generateCard();
    document.querySelector('.cards').prepend(cardElement);
})