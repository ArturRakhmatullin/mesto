import { openPopup } from "./index.js";

export default class Card {
	  constructor(data, cardSelector) {
	    this._title = data.name;
	    this._imageLink = data.link;
	    this._cardSelector = cardSelector;
	    this._element = this._getTemplate();
	  }
	
	  _getTemplate() {
	    const cardElement = document
	      .querySelector(this._cardSelector)
	      .content.querySelector(".elements__cardname")
	      .cloneNode(true);
	
	    return cardElement;
	  }

	  _like(evt) {
	    evt.target.classList.toggle("elements__like_active");
	  }

	  _removeCard(evt) {
	    evt.target.closest(".elements__cardname").remove();
	  }

	  _scaleImage(evt) {
	    this._popupForFullscreen = document.querySelector('.popup_type_fullscreen');
	    this._formImg = document.querySelector('.popup__image');
	    this._formImgTitle = document.querySelector('.popup__name');
	    this._formImg.src = evt.target.src;
	    this._formImg.alt = evt.target.alt;
	    this._formImgTitle.textContent = evt.target.alt;
	
	    return openPopup(this._popupForFullscreen);
	  }
	
	  _setEventListener() {
	    this._image = this._element.querySelector(".elements__photo");
	    this._element
	      .querySelector(".elements__like")
	      .addEventListener("click", this._like);
	    this._element
	      .querySelector(".elements__delete")
	      .addEventListener("click", this._removeCard);
	    this._image.addEventListener("click", this._scaleImage);
	  }
	
	  generateCard() {
	    this._setEventListener();
	
	    this._image.src = this._imageLink;
	    this._image.alt = this._title;
	    this._element.querySelector(".elements__cardname").textContent = this._title;

	    return this._element;
	  }
	}

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

initialCards.forEach((item) => {
	renderCard(cardElements, handleNewCard(item));
  });
