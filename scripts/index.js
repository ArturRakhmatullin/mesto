import { Card } from './card.js';
import { config, FormValidator } from './formValidator.js';
export { fullPhotoPopup, fullPhoto, openPopup, closePopupByEsc };

const buttonEditProfile = document.querySelector('.profile__rename');
const popupEditProfile = document.querySelector('.popup_type_rename');
const formEditProfile = document.querySelector('.popup__form_rename');
const name = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__profession');
const nameInput = formEditProfile.querySelector('.popup__info_type_name');
const professionInput = formEditProfile.querySelector('.popup__info_type_profession');
const buttonAddPlace = document.querySelector('.profile__button');
const popupAddPlace = document.querySelector('.popup_type_append');
const formAddPlace = document.querySelector('.popup__form_type_append-card');
const placeName = document.querySelector('.popup__info_type_place');
const placeLink = document.querySelector('.popup__info_type_email');
const photoCards = document.querySelector('.cards');
const fullPhotoPopup = document.querySelector('.popup_type_fullscreen');
const fullPhoto = fullPhotoPopup.querySelector('.popup__image');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupByEsc);
}

function openPopupEditProfile() {
  openPopup(popupEditProfile);
  resetButtonState(popupEditProfile);
  resetSpans(popupEditProfile);
  formEditProfile.reset();
  nameInput.value = name.textContent;
  professionInput.value = profession.textContent;
}

function openPopupAddPlace() {
  openPopup(popupAddPlace);
  resetButtonState(popupAddPlace);
  resetSpans(popupAddPlace);
  formAddPlace.reset();
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupByEsc);
}

const resetSpans = (popup) => {
  const errorSpans = popup.querySelectorAll('.popup__error');
  const inputs = popup.querySelectorAll('.popup__info');
  errorSpans.forEach((errorElement) => {
    errorElement.textContent = " "
  });
  inputs.forEach((input) => {
    input.classList.remove('popup__info_type_error')
  })
}

const resetButtonState = (popup) => {
  const button = popup.querySelector('.popup__submit');
  button.classList.add('popup__submit_inactive');
  button.setAttribute('disabled', '');
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

function editeProfileFormSubmitHandler(event) {
  event.preventDefault();
  name.textContent = nameInput.value;
  profession.textContent = professionInput.value;
  closePopup(popupEditProfile);
  resetSpans(popupEditProfile);
  formEditProfile.reset();
}

function formAddPlaceSubmitHandler(event) {
  event.preventDefault();
  closePopup(popupAddPlace);
  const card = new Card(placeName.value, placeLink.value, '#elements');
  const cardElement = card.generateCard();
  photoCards.prepend(cardElement);
  resetSpans(popupAddPlace);
  formAddPlace.reset();
}

buttonEditProfile.addEventListener('click', openPopupEditProfile);

buttonAddPlace.addEventListener('click', openPopupAddPlace);

formEditProfile.addEventListener('submit', editeProfileFormSubmitHandler);

formAddPlace.addEventListener('submit', formAddPlaceSubmitHandler);

const formList = document.querySelectorAll(config.formSelector);

formList.forEach((formElement) => {
  const formValidator = new FormValidator(config, formElement);
  formValidator.enableValidation();
})