export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__info',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__info_type_error',
    errorClass: 'popup__error_visible'
}

export const popupEditProfile = '.popup_type_rename';
export const popupAddPlace = document.querySelector('.popup_type_append');
export const popupBigScreen = document.querySelector('.popup_type_fullscreen');

export const openPopupRenameUserButton = document.querySelector('.profile__rename');
export const openPopupAppendCardButton = document.querySelector('.profile__button');

export const formEditProfile = document.querySelector('.popup__form_rename');
export const formAddPlace = document.querySelector('.popup__form_type_append-card');

export const userName = document.querySelector('.profile__name');
export const userProfession = document.querySelector('.profile__profession');

export const placeForName = '.profile__name';
export const placeForProfession = '.profile__profession';
export const inputUserName = 'username';
export const inputUserProfession = 'userprofession';
export const inputCardName = 'place';
export const inputCardLink = 'email';

export const nameInput = formEditProfile.querySelector('.popup__info_type_name');
export const professionInput = formEditProfile.querySelector('.popup__info_type_profession');
export const imgNameInput = formAddPlace.querySelector('.popup__info_type_place');
export const imgLinkInput = formAddPlace.querySelector('.popup__info_type_email');
export const cardName = document.querySelector('.elements__cardname');

export const imageCards = '.cards';

//export const popups = document.querySelectorAll('.popup');
//export const placeInput = document.querySelector('.popup__info_type_place');
//export const linkInput = document.querySelector('.popup__info_type_email');
//export const fullscreenImg = popupBigScreen.querySelector('.popup__image');
//export const popupName = document.querySelector('.popup__name');

export const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  }
];