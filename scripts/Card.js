import { fullPhotoPopup, fullPhoto, openPopup, closePopupByEsc } from './index.js'
export { initialCards, Card, renderCards }

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
			.content
            .querySelector('.elements__card')
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
        this._element.querySelector('.elements__photo').addEventListener('click', () => { this._handleOpenFullPhotoPopup(fullPhotoPopup); });
        this._element.querySelector('.elements__like').addEventListener('click', () => { this._handleLikeClick(evt); });
        this._element.querySelector('.elements__delete').addEventListener('click', () => { this._handleDeleteButton(evt); });
    }


    _handleOpenFullPhotoPopup(fullPhotoPopup) {
        fullPhoto.src = this._link;
        fullPhoto.alt = this._name;
        document.querySelector('.popup__name').textContent = this._name;
        openPopup(fullPhotoPopup);
        document.addEventListener('keyup', closePopupByEsc);
    }

    _handleLikeClick(evt) {
        evt.target.classList.toggle('elements__like_active');
    }

    _handleDeleteButton(evt) {
        const a = evt.target.closest('.elements__card');
        a.remove();
    }
}

const renderCards = initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, '#card');
    const cardElement = card.generateCard();
    document.querySelector('.cards').prepend(cardElement);
})