export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__info',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__info_type_error',
    errorClass: 'popup__error_visible'
}

export const popups = document.querySelectorAll('.popup');
export const popupEditProfile = document.querySelector('.popup_type_rename');
export const popupAddPlace = document.querySelector('.popup_type_append');
export const popupBigScreen = document.querySelector('.popup_type_fullscreen');

export const openPopupRenameUserButton = document.querySelector('.profile__rename');
export const openPopupAppendCardButton = document.querySelector('.profile__button');

export const formEditProfile = document.querySelector('.popup__form_rename');
export const formAddPlace = document.querySelector('.popup__form_type_append-card');

export const name = document.querySelector('.profile__name');
export const profession = document.querySelector('.profile__profession');

export const nameInput = formEditProfile.querySelector('.popup__info_type_name');
export const professionInput = formEditProfile.querySelector('.popup__info_type_profession');
export const placeInput = document.querySelector('.popup__info_type_place');
export const linkInput = document.querySelector('.popup__info_type_email');

export const imageCards = document.querySelector('.cards');
export const fullscreenImg = popupBigScreen.querySelector('.popup__image');
export const popupName = document.querySelector('.popup__name');

export const inputUserName = 'name';
export const inputUserProfession = 'profession';
export const inputCardName = 'newplace';
export const inputCardLink = 'link';

export const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
      isLike: false
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
      isLike: false
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
      isLike: false
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
      isLike: false
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
      isLike: false
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
      isLike: false
  }
];
