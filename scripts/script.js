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

const elementsTemplate = root.querySelector('#elements').content;
const cards = root.querySelector('.cards');
const card = root.querySelector('.elements__card');

let popup = root.querySelector('.popup');
let pencil = root.querySelector('.profile__rename');
let close = root.querySelector('.popup__close');
let formElement = root.querySelector('.popup__form');
let nameInput = root.querySelector('.popup__placefortext_content_name');
let jobInput = root.querySelector('.popup__placefortext_content_profession');

let popupAgain = root.querySelector('.popupagain');
let container = popupAgain.querySelector('.popupagain__container');
let addNewCard = root.querySelector('.profile__button');
let closeAgain = root.querySelector('.popupagain__close');
let formElementAgain = root.querySelector('.popupagain__form');
let titleInput = root.querySelector('.popupagain__placefortext_content_title');
let linkInput = root.querySelector('.popupagain__placefortext_content_link');


let fullscreen = root.querySelector('.fullscreen');
let fullscreenImg = root.querySelector('.fullscreen__image');
let fullscreenTitle = root.querySelector('.fullscreen__title');
let fullscreenClose = root.querySelector('.fullscreen__close');

let photos = root.querySelector('.elements__photo');



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
}

function closePopupAgain() {
    popupAgain.classList.remove('popupagain_opened');
}

function formSubmitHandlerAgain (evt) {
    evt.preventDefault();
    const data = {
    name: titleInput.value,
    link: linkInput.value,
};
    addCard(data);
    evt.target.reset();
    closePopupAgain();
}

addNewCard.addEventListener('click', openPopupAagain);
closeAgain.addEventListener('click', closePopupAgain);
formElementAgain.addEventListener('submit', formSubmitHandlerAgain); 


/* функция создает карточку */
const createCard = (item) => {
    const cardElement = elementsTemplate.cloneNode(true);
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

function addCard(data) {
    const cardOne = createCard(data);
    cards.prepend(cardOne);
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
    fullscreenTitle.textContent = cardName.textContent;
    fullscreen.classList.add('fullscreen_opened');
}


function closePopupFullscreen() {
    fullscreen.classList.remove('fullscreen_opened');
}

fullscreenClose.addEventListener('click', closePopupFullscreen);


/* создает карточки */
function renderCards() {
   initialCards.forEach((el) => {
     cards.append(createCard(el));
   });
}

function abcdef () {
    console.log('приивет');
}

  /* init */
renderCards();