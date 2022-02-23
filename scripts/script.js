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


const root = document.querySelector('.root');
const profileName = root.querySelector('.profile__name');
const profileProfession = root.querySelector('.profile__profession');

const elementsTemplate = root.querySelector('#elements').content;
const cards = root.querySelector('.cards');

const newNamePopup = root.querySelector('.newnamepopup');
const pencil = root.querySelector('.profile__rename');
const closeButton = root.querySelector('.popup__close');
const formElement = root.querySelector('.popup__form');
const nameInput = root.querySelector('.popup__placefortext_content_name');
const jobInput = root.querySelector('.popup__placefortext_content_profession');

const addNewCard = root.querySelector('.profile__button');
const newPlacePopup = root.querySelector('.popupagain');
const closeButtonAgain = root.querySelector('.popupagain__close');
const formElementAgain = root.querySelector('.popupagain__form');
const titleInput = root.querySelector('.popupagain__placefortext_content_title');
const linkInput = root.querySelector('.popupagain__placefortext_content_link');

const fullscreen = root.querySelector('.fullscreen');
const fullscreenImg = root.querySelector('.fullscreen__image');
const fullscreenTitle = root.querySelector('.fullscreen__title');
const fullscreenClose = root.querySelector('.fullscreen__close');

function openPopup(popup){
  popup.classList.add('popup_opened');
}

function closePopup() {
  root.querySelector('.popup_opened').classList.remove('popup_opened');
}

function openNewNamePopup(){
  openPopup(newNamePopup);
}

pencil.addEventListener('click', openNewNamePopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', submitFormHandler); 

function openNewPlacePopup(){
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
  openPopup(newPlacePopup);
}

addNewCard.addEventListener('click', openNewPlacePopup);
closeButtonAgain.addEventListener('click', closePopup);
formElementAgain.addEventListener('submit', submitFormHandlerAgain);

function submitFormHandler (evt) {
    evt.preventDefault();
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
    profileName.textContent = nameValue;
    profileProfession.textContent = jobValue;
    closePopup();
}

function submitFormHandlerAgain (evt) {
    evt.preventDefault();
    const data = {
    name: titleInput.value,
    link: linkInput.value,
};
    addCard(data);
    evt.target.reset();
    closePopup();
}

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
    openPopup(fullscreen);
}

fullscreenClose.addEventListener('click', closePopup);

function renderCards() {
   initialCards.forEach((el) => {
     cards.append(createCard(el));
   });
}

renderCards();