import './index.css';

import { Card } from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import { Section } from "../components/Section.js";
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

import {
  config,
  popupEditProfile,
  popupAddPlace,
  popupBigScreen,
  openPopupRenameUserButton,
  openPopupAppendCardButton,
  formEditProfile,
  formAddPlace,
  userName,
  userProfession,
  nameInput,
  professionInput, 
  imageCards,
  initialCards,
} from '../utils/constants.js';

const formEditProfileValidator = new FormValidator(config, formEditProfile);
const formAddPlaceValidator = new FormValidator(config, formAddPlace);

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (card) => {
      const cardItem = handleNewCard(card);
      cardSection.addItem(cardItem);
    },
  },
  imageCards
);

const userInfoEl = new UserInfo({
  placeForName: userName,
  placeForProfession: userProfession,
});

const popupUserInfo = new PopupWithForm(popupEditProfile, (data) => { userInfoEl.setUserInfo(data)});
const popupImg = new PopupWithForm(popupAddPlace, (data) => { cardSection.addItem(handleNewCard(data));});
const popupWithImage = new PopupWithImage(popupBigScreen);

function handleCardClick(event) {
  popupWithImage.open(event.target);
}

function handleNewCard(card) {
  const newCard = new Card(card, '#elements', handleCardClick).generateCard();
  return newCard;
}

formEditProfileValidator.enableValidation();
formAddPlaceValidator.enableValidation();

cardSection.renderItems();

popupUserInfo.setEventListeners();
popupImg.setEventListeners();
popupWithImage.setEventListeners();

openPopupRenameUserButton.addEventListener('click', () => {
  popupUserInfo.open();
  const { placeForName, placeForProfession } = userInfoEl.getUserInfo();
  nameInput.value = placeForName;
  professionInput.value = placeForProfession;
  formEditProfileValidator.repeatValidation();
});

openPopupAppendCardButton.addEventListener('click', () => {
  popupImg.open();
  formAddPlaceValidator.repeatValidation();
});