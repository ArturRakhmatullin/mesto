export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__info',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__info_type_error',
    errorClass: 'popup__error_visible'
}

export const popupEditProfile = '.popup_type_rename';
export const popupAddPlace = '.popup_type_append';
export const popupBigScreen = '.popup_type_fullscreen';

export const openPopupRenameUserButton = document.querySelector('.profile__rename');
export const openPopupAppendCardButton = document.querySelector('.profile__button');

export const editAvatarPopup = document.querySelector('.popup_type_edit-avatar');
export const avatarImg = document.querySelector('.profile__avatar');
export const avatarEditButton = document.querySelector('.profile__editavatar');
export const avatarInput = editAvatarPopup.querySelector('#avatar');
export const editAvatarForm = editAvatarPopup.querySelector('.popup__form');


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
//export const popupRemove = '.popup_type_remove';
