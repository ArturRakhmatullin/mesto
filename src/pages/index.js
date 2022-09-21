import './index.css';

import Api from '../components/Api.js'
import { Card } from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import { Section } from "../components/Section.js";
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import RemovePopup from '../components/RemovePopup.js';

import {
  config,
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
  imgNameInput,
  imgLinkInput,
  avatarEditButton,
  editAvatarForm,
} from '../utils/constants.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-50',
  headers: {
    'authorization': '602fce52-47ee-402a-b2dd-b2ee3d1cac69',
    'Content-Type': 'application/json',
  },
});

const userInfoEl = new UserInfo({
  placeForName: '.profile__name',
  placeForProfession: '.profile__profession',
  avatarImg: '.profile__avatar',
});

const cardSection = new Section(
  {
    renderer: (item) => {
      const cardItem = handleNewCard(item);
      cardSection.addItem(cardItem);
    },
  },
  imageCards
);

Promise.all([api.getProfileInfo(), api.getInitialCards()])
  .then(res => {
    userInfoEl.setUserInfo(res[0]);
    cardSection.renderItems(res[1]);
  })
  .catch((err) => {console.log(`Ошибка: ${err}`)});
  

const popupWithImage = new PopupWithImage('.popup_type_fullscreen');
popupWithImage.setEventListeners();

const removePopup = new RemovePopup('.popup_type_remove', 
  {
    confirmRemove: (cardId, card) => {
      api.removeCard(cardId)
        .then( () => {
          card.removeCard();
          removePopup.close();
        })
        .catch((err) => {console.log(`Ошибка: ${err}`)})  
    }
  }
);
removePopup.setEventListeners();

function handleNewCard(values) {
  const card = new Card( {
    data: values,
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
    },
    handleDeleteButton: (_id, card) => {
      removePopup.open(_id, card);
    },
    
    handleCardAddLike: (_id, card) => {
      api.addLike(_id)
      .then((res) => {
        card.setLikesCount(res.likes.length);
        card.toggleLikeButton();
      })
      .catch((err) => console.error(err))  
    },
    handleCardRemoveLike: (_id, card) => {
      api.removeLike(_id)
      .then((res) => {
        card.setLikesCount(res.likes.length);
        card.toggleLikeButton();
      })
      .catch((err) => console.error(err))
    },
    userId: userInfoEl.getUserId()
  }, 
      '#elements').generateCard();
  return card;
}

const popupUserInfo = new PopupWithForm('.popup_type_rename',
  {
    callbackSubmitForm: (values) => {
      popupUserInfo.loading(true);
      api.editProfile(values.name, values.about)
      .then(data => {
        userInfoEl.setUserInfo(data);
        popupUserInfo.close();
      })
      .catch((err) => {console.log(`Ошибка: ${err}`)})
      .finally(() => {
        popupUserInfo.loading(false);
      });
  }
});
popupUserInfo.setEventListeners();

const editAvatarImg = new PopupWithForm('.popup_type_edit-avatar', 
  {
    callbackSubmitForm: (values) => {
      editAvatarImg.loading(true);
      api.editAvatar(values.avatar)
      .then(data => {
      userInfoEl.setUserAvatar(data);
      editAvatarImg.close();
    })
    .catch((err) => {console.log(`Ошибка: ${err}`)})
    .finally(() => {
      editAvatarImg.loading(false);
    });
  }
});
editAvatarImg.setEventListeners();

const popupImg = new PopupWithForm('.popup_type_append',
  {
    callbackSubmitForm: (values) => {
    popupImg.loading(true);
    api.addCard(values.name, values.link)
    .then(data => {
      const cardItem = handleNewCard(data);
      cardSection.addItem(cardItem);
      popupImg.close()
    })
    .catch((err) => {console.log(`Ошибка: ${err}`)})
    .finally(() => {
      popupImg.loading(false);
    });
  }
});
popupImg.setEventListeners();

const formEditProfileValidator = new FormValidator(config, formEditProfile);
const formAddPlaceValidator = new FormValidator(config, formAddPlace);
const editAvatarFormValidator = new FormValidator(config, editAvatarForm);

formEditProfileValidator.enableValidation();
formAddPlaceValidator.enableValidation();
editAvatarFormValidator.enableValidation();

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

avatarEditButton.addEventListener('click', () => {
  editAvatarImg.open();
  editAvatarFormValidator.repeatValidation();
});