const root = document.querySelector('.root');

const template = document.querySelector("#elements").content;
const card = document.querySelector(".elements__card");
const cards = document.querySelector(".cards");

const popupRenameUser = document.querySelector(".popup_type_rename");
const popupAppendCard = document.querySelector(".popup_type_append");
const popupBigScreen = document.querySelector(".popup_type_fullscreen");

const openPopupRenameUserButton = document.querySelector(".profile__rename");
const closePopupRenameUserButton = document.querySelector(".popup__close_type_rename-user");
const openPopupAppendCardButton = document.querySelector(".profile__button");
const closePopupAppendCardButton = document.querySelector(".popup__close_type_append-card");
const openPopupBigScreen = document.querySelector(".card__image");
const closePopupFullScreen = document.querySelector(".popup__close_type_fullscreen");

const nameInput = document.querySelector(".popup__info_type_name");
const jobInput = document.querySelector(".popup__info_type_profession");
const placeInput = document.querySelector(".popup__info_type_place");
const linkInput = document.querySelector(".popup__info_type_email");

const formProfileElement = document.querySelector(".popup__form_rename");
const formElementCard = document.querySelector(".popup__form_type_append-card");
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");

const fullscreenImg = document.querySelector(".popup__image");
const fullscreenTitle = document.querySelector(".popup__name");

function openPopup(popup){
  popup.classList.add('popup_opened');
  root.addEventListener('keydown',  closeByEsc)
}

function closePopup() {
  root.querySelector('.popup_opened').classList.remove('popup_opened');
  root.removeEventListener('keydown',  closeByEsc)
}

function openNewNamePopup(){
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
  openPopup(popupRenameUser);
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = root.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
} 

const closePopupOverlay = (evt) => {
  if (evt.target === evt.currentTarget)
  closePopup();
};

openPopupRenameUserButton.addEventListener('click', openNewNamePopup);
closePopupRenameUserButton.addEventListener('click', closePopup);
popupRenameUser.addEventListener('click', closePopupOverlay);
formProfileElement.addEventListener('submit', submitProfileForm);

function openNewPlacePopup(){
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
  openPopup(popupAppendCard);
}

openPopupAppendCardButton.addEventListener('click', openNewPlacePopup);
closePopupAppendCardButton.addEventListener('click', closePopup);
popupAppendCard.addEventListener('click', closePopupOverlay);
formElementCard.addEventListener('submit', submitAddCardForm); 

function submitProfileForm (evt) {
    evt.preventDefault();
    const nameValue = nameInput.value;
    const jobValue = jobInput.value;
    profileName.textContent = nameValue;
    profileProfession.textContent = jobValue;
    closePopup();
}

function submitAddCardForm (evt) {
    evt.preventDefault();
    const data = {
    name: placeInput.value,
    link: linkInput.value,
};
    addCard(data);
    evt.target.reset();
    const buttonElement = popupAppendCard.querySelector(".popup__submit");
    buttonElement.classList.add("popup__submit_disabled");
    buttonElement.setAttribute("disabled", "disabled");
    closePopup();
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
    openPopup(popupBigScreen);
}

closePopupFullScreen.addEventListener('click', closePopup);
popupBigScreen.addEventListener('click', closePopupOverlay);

