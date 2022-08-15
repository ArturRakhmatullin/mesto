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
  placeForName,
  placeForProfession,
  inputUserName,
  inputUserProfession,
  imgNameInput,
  imgLinkInput,
  cardName,
} from '../utils/constants.js';

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const cardItem = handleNewCard(data);
      cardSection.addItem(cardItem);
    },
  },
  imageCards
);
cardSection.renderItems();

const popupWithImage = new PopupWithImage(popupBigScreen);
popupWithImage.setEventListeners();

function handleCardClick(event) {
  popupWithImage.open(event.target);
}

function handleNewCard(data) {
  const newCard = new Card(data, '#elements', handleCardClick).generateCard();
  return newCard;
}

const userInfoEl = new UserInfo({ placeForName, placeForProfession });

const popupUserInfo = new PopupWithForm(popupEditProfile, (data) => { userInfoEl.setUserInfo(data)});
popupUserInfo.setEventListeners();

const popupImg = new PopupWithForm(popupAddPlace, (data) => { cardSection.addItem(handleNewCard(data));});
popupImg.setEventListeners();


const formEditProfileValidator = new FormValidator(config, formEditProfile);
const formAddPlaceValidator = new FormValidator(config, formAddPlace);

formEditProfileValidator.enableValidation();
formAddPlaceValidator.enableValidation();


openPopupRenameUserButton.addEventListener('click', () => {
  popupUserInfo.open();
  const {} = userInfoEl.getUserInfo();
  nameInput.value = userName.textContent;
  professionInput.value = userProfession.textContent;
  formEditProfileValidator.repeatValidation();
});

openPopupAppendCardButton.addEventListener('click', () => {
  popupImg.open();
  imgNameInput.value = ''
  imgLinkInput.value = ''
  formAddPlaceValidator.repeatValidation();
});