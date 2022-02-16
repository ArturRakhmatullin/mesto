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

let root = document.querySelector('.root');
const profileName = root.querySelector('.profile__name');
const profileProfession = root.querySelector('.profile__profession');
let popup = root.querySelector('.popup');
let pencil = root.querySelector('.profile__rename');
let close = root.querySelector('.popup__close');
let formElement = root.querySelector('.popup__form');
let nameInput = root.querySelector('.popup__placefortext_content_name');
let jobInput = root.querySelector('.popup__placefortext_content_profession');

let popupAgain = root.querySelector('.popupagain');
let addNewCard = root.querySelector('.profile__button');
let closeAgain = root.querySelector('.popupagain__close');
let formElementAgain = root.querySelector('.popupagain__form');
let titleInput = root.querySelector('.popupagain__placefortext_content_title');
let linkInput = root.querySelector('.popupagain__placefortext_content_link');


function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
    profileName.textContent = nameValue;
    profileProfession.textContent = jobValue;
    closePopup();
}

pencil.addEventListener('click', openPopup);

close.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler); 


function openPopupAagain() {
    popupAgain.classList.add('popupagain_opened');
    titleInput.value = profileName.textContent;
    linkInput.value = profileProfession.textContent;
}

function closePopupAgain() {
    popupAgain.classList.remove('popupagain_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    let titleValue = titleInput.value;
    let linkValue = linkInput.value;
    profileName.textContent = titleValue;
    profileProfession.textContent = linkValue;
    closePopupAgain();
}

addNewCard.addEventListener('click', openPopupAagain);

closeAgain.addEventListener('click', closePopupAgain);

formElementAgain.addEventListener('submit', formSubmitHandlerAgain); 
