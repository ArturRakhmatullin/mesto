export class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._element = this._getTemplate();
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
			.content.querySelector('.elements__card')
			.cloneNode(true);
        return cardElement;
    }

    _setEventListeners() {
        this._cardImage = this._element.querySelector('.elements__photo');
        this._cardImage.addEventListener('click', this._handleCardClick);
        this._element.querySelector('.elements__like').addEventListener('click', (event) => { this._handleLikeClick(event); });
        this._element.querySelector('.elements__delete').addEventListener('click', (event) => { this._handleDeleteButton(event); });
    }

    generateCard() {
        this._setEventListeners();
        this._cardImage.alt = this._name;
        this._cardImage.src = this._link;
        this._element.querySelector('.elements__cardname').textContent = this._name;
        return this._element;
    }

    _handleLikeClick(event) {
        event.target.classList.toggle('elements__like_active');
    }

    _handleDeleteButton() {
        this._element.remove();
    }
}