import { Card } from './card.js';
import { config, FormValidator } from './formValidator.js';

const template = document.querySelector("#elements").content;

const popupEditProfile = document.querySelector('.popup_type_rename');
const popupAddPlace = document.querySelector('.popup_type_append');
const popupBigScreen = document.querySelector('.popup_type_fullscreen');

const openPopupRenameUserButton = document.querySelector('.profile__rename');
const openPopupAppendCardButton = document.querySelector('.profile__button');

const formEditProfile = document.querySelector('.popup__form_rename');
const formAddPlace = document.querySelector('.popup__form_type_append-card');
const formList = document.querySelectorAll(config.formSelector);

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
  FormValidator.toggleButtonState;
  nameInput.value = name.textContent;
  professionInput.value = profession.textContent;
}

function openPopupAddPlace() {
  openPopup(popupAddPlace);
  FormValidator.toggleButtonState;
}

const popups = document.querySelectorAll('.popup');
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

function handleAddPlaceSubmit(event) {
  event.preventDefault();
  closePopup(popupAddPlace);  
  const card = new Card(placeInput.value, linkInput.value, '#elements');
  const cardElement = card.generateCard();
  imageCards.prepend(cardElement);
}

const createCard = (item) => {
  const cardElement = template.cloneNode(true);
  const photo = cardElement.querySelector('.elements__photo');
  const title = cardElement.querySelector('.elements__cardname');
  const like = cardElement.querySelector('.elements__like');
  const deleteBtn = cardElement.querySelector('.elements__delete');
  like.addEventListener('click', likeCard);
  deleteBtn.addEventListener('click', deleteCard);
  photo.addEventListener('click', openPopupFullscreen);
  photo.src = item.link;
  photo.alt = item.name;
  title.textContent = item.name;
  return cardElement;
}

function likeCard(evt) {
  const target = evt.target;
  target.classList.toggle('elements__like_active');
}

function deleteCard(evt) {
  evt.target.closest('.elements__card').remove();
}

function openPopupFullscreen(evt) {
  const card = evt.target.closest('.elements__card');
  const photo = card.querySelector('.elements__photo');
  const cardName = card.querySelector('.elements__cardname');
  fullscreenImg.src = photo.src;
  fullscreenImg.alt = cardName.textContent;
  popupName.textContent = cardName.textContent;
  openPopup(popupBigScreen);
}

initialCards.forEach((item) => {
  const cardElement = createCard(item);
  imageCards.prepend(cardElement);
});

openPopupRenameUserButton.addEventListener('click', openPopupEditProfile);
openPopupAppendCardButton.addEventListener('click', openPopupAddPlace);

formEditProfile.addEventListener('submit', handleProfileFormSubmit);
formAddPlace.addEventListener('submit', handleAddPlaceSubmit);

formList.forEach((formElement) => {
  const formValidator = new FormValidator(config, formElement);
  formValidator.enableValidation();
})

export { popupBigScreen, fullscreenImg, popupName, openPopup, closePopupByEsc };