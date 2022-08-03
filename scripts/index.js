import { Card } from './Card.js';
import { config, FormValidator } from './FormValidator.js';

const popups = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.popup_type_rename');
const popupAddPlace = document.querySelector('.popup_type_append');
const popupBigScreen = document.querySelector('.popup_type_fullscreen');

const openPopupRenameUserButton = document.querySelector('.profile__rename');
const openPopupAppendCardButton = document.querySelector('.profile__button');

const formEditProfile = document.querySelector('.popup__form_rename');
const formAddPlace = document.querySelector('.popup__form_type_append-card');

const name = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__profession');

const nameInput = formEditProfile.querySelector('.popup__info_type_name');
const professionInput = formEditProfile.querySelector('.popup__info_type_profession');
const placeInput = document.querySelector('.popup__info_type_place');
const linkInput = document.querySelector('.popup__info_type_email');

const imageCards = document.querySelector('.cards');
const fullscreenImg = popupBigScreen.querySelector('.popup__image');
const popupName = document.querySelector('.popup__name');

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

const formEditProfileValidator = new FormValidator(config, formEditProfile);
const formAddPlaceValidator = new FormValidator(config, formAddPlace);

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupByEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupByEsc);
}

function openPopupEditProfile() {
  openPopup(popupEditProfile);
  nameInput.value = name.textContent;
  professionInput.value = profession.textContent;
}

function openPopupAddPlace() {
  openPopup(popupAddPlace);
  formAddPlace.reset();
  formAddPlaceValidator.repeatValidation();
}

popups.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    if ((event.target === event.currentTarget) || (event.target.classList.contains('popup__close'))) {
      closePopup(popup);
    }
  })
})

function closePopupByEsc(event) {
  if (event.key === "Escape") {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  };
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  name.textContent = nameInput.value;
  profession.textContent = professionInput.value;
  closePopup(popupEditProfile);
}

const createCard = (name, link) => {
  const card = new Card(name, link, '#elements');
  const cardElement = card.generateCard();
  return cardElement;
}

function handleAddPlaceSubmit(event) {
  event.preventDefault();
  closePopup(popupAddPlace);
  const cardElement = createCard(placeInput.value, linkInput.value);
  imageCards.prepend(cardElement);
}

initialCards.forEach((item) => {
  const cardElement = createCard(item.name, item.link);
  imageCards.prepend(cardElement);
});

openPopupRenameUserButton.addEventListener('click', openPopupEditProfile);
openPopupAppendCardButton.addEventListener('click', openPopupAddPlace);

formEditProfile.addEventListener('submit', handleProfileFormSubmit);
formAddPlace.addEventListener('submit', handleAddPlaceSubmit);

formEditProfileValidator.enableValidation();
formAddPlaceValidator.enableValidation();

export { popupBigScreen, fullscreenImg, popupName, openPopup, closePopupByEsc };