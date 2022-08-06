import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from "../components/Section.js";
import { Popup } from '../components/Popup.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';

import {
  config,
  popups,
  popupEditProfile,
  popupAddPlace,
  popupBigScreen,
  openPopupRenameUserButton,
  openPopupAppendCardButton,
  formEditProfile,
  formAddPlace,
  name,
  profession,
  nameInput,
  professionInput,
  placeInput,
  linkInput,
  imageCards,
  fullscreenImg,
  popupName,
  initialCards,
} from '../utils/constants.js';

const userInfo = new UserInfo({ name, profession });

const createCard = (name, link) => {
  const uniqueCard = new Card(name, link, '#elements', () => {
    popupWithImage.open(name.title, link.src);
  });
  const cardElement = uniqueCard.generateCard();
  return cardElement;
}

const popupWithImage = new PopupWithImage(popupBigScreen);
popupWithImage.setEventListeners();

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (card) => {
      return createCard(card);
    },
  },
  imageCards
);
cardSection.renderItems();

const formEditProfileValidator = new FormValidator(config, formEditProfile);
const formAddPlaceValidator = new FormValidator(config, formAddPlace);

const popupUserInfo = new PopupWithForm(
  formEditProfile,
  (data) => {
    userInfo.setUserInfo({
      userName: data[inputUserName],
      userProfession: data[inputUserProfession],
    });
  },
  () => {
    const info = userInfo.getUserInfo();
    nameInput.value = info.userName;
    professionInput.value = info.userProfession;
    formEditProfileValidator.repeatValidation();
  }
);
popupUserInfo.setEventListeners();
openPopupRenameUserButton.addEventListener("click", () => {
  popupUserInfo.open();
});

const popupImg = new PopupWithForm(
  formAddPlace,
  (data) => {
    const card = {
      title: data[inputCardName],
      src: data[inputCardLink],
      isLike: false,
    };
    cardSection.addItem(createCard(card));
  },
  () => {
    formAddPlaceValidator.repeatValidation();
  }
);
popupImg.setEventListeners();
openPopupAppendCardButton.addEventListener("click", () => {
  popupImg.open();
});

formEditProfileValidator.enableValidation();
formAddPlaceValidator.enableValidation();