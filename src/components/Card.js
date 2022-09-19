export class Card {
    constructor({ data, handleCardClick, handleDeleteButton, handleCardAddLike, handleCardRemoveLike, userId }, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._cardId = data._id;
        this._ownerId = data.owner._id;
        this._handleCardClick = handleCardClick;
        this._handleDeleteButton = handleDeleteButton;
        this._handleCardAddLike = handleCardAddLike;
        this._handleCardRemoveLike = handleCardRemoveLike;
        this._userId = userId;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
			.content
			.cloneNode(true);
        return cardElement;
    }

    _setEventListeners() {
        this._cardImage.addEventListener('click', () => {this._handleCardClick(this._name, this._link)})
        //this._element.querySelector('.elements__like').addEventListener('click', (event) => { this._handleLikeClick(event); });
        this._element.querySelector('.elements__delete').addEventListener('click', () => { this._handleDeleteButton(this._cardId, this); });
        this._likeBtn.addEventListener('click', (event) => {
            if(event.target.classList.contains('elements__like_active')) {
              this._handleCardRemoveLike(this._cardId, this);
            } else {
              this._handleCardAddLike(this._cardId, this);
            };
          });
    }

    removeCard = () =>  {
        this.elements__card.remove();
    }

    setLikesCount = (count) => {
        this._likesCounter.textContent = count;
      }
    
    toggleLikeButton = () => {
        this._likeBtn.classList.toggle('elements__like_active');
      }

    generateCard() {
        this._element = this._getTemplate();
        this._likesCounter = this._element.querySelector('.elements__like-counter');
        this._likeBtn = this._element.querySelector('.elements__like');
        this._cardImage = this._element.querySelector('.elements__photo');
        this._setEventListeners();

        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this.elements__card = this._element.querySelector('.elements__card');
        this.setLikesCount(this._likes.length);

        this._element.querySelector('.elements__cardname').textContent = this._name;

        if(this._userId !== this._ownerId) {
            this._element.querySelector('.elements__delete').style.display = 'none';
        }
    
        if(this._likes.findIndex((i) => i._id === this._userId) != -1) {
            this._likeBtn.classList.add('elements__like_active');
        } 

        return this._element;
    }

    //_handleLikeClick(event) {
    //    event.target.classList.toggle('elements__like_active');
    //}
    
}