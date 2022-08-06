export class Card {
    constructor({ name, link }, cardSelector, handleCardClick) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
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
        this._cardImage.src = this._link;
        return this._element;
    }

    _setEventListeners() {
        this._cardImage.addEventListener('click', this._handleCardClick);
        this._element.querySelector('.elements__like').addEventListener('click', (event) => { this._handleLikeClick(event); });
        this._element.querySelector('.elements__delete').addEventListener('click', (event) => { this._handleDeleteButton(event); });
    }

    _handleLikeClick(event) {
        event.target.classList.toggle('elements__like_active');
    }

    _handleDeleteButton() {
        this._element.remove();
    }
}