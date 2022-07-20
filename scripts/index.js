import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const selectorsNamesForValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__info",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_inactive",
  inputErrorClass: "form__info_type_error",
  errorClass: "popup__error",
};

const popupList = document.querySelectorAll(".popup");
const popupForEditAuthor = document.querySelector(".popup_type_rename");
const popupForAddCard = document.querySelector(".popup_type_append");
const profileEditOpenBtn = document.querySelector(".profile__rename");
const cardAddOpenBtn = document.querySelector(".profile__button");

const formForEditAuthor = popupForEditAuthor.querySelector(".popup__form_rename");
const formForAddCard = popupForAddCard.querySelector(".popup__form_type_append-card");
const formInputImage = formForAddCard.querySelector(".popup__info_type_email");
const formInputTitle = formForAddCard.querySelector(".popup__info_type_place");

const authorProfile = document.querySelector(".profile__name");
const authorJobProfile = document.querySelector(".profile__profession");
const authorProfileInput = document.querySelector(".popup__info_type_name");
const authorJobProfileInput = document.querySelector(".popup__info_type_profession");

const cardElements = document.querySelector(".cards");

const validatorFormForEditAuthor = new FormValidator(
  selectorsNamesForValidation,
  formForEditAuthor
);
const validatorFromForAddCard = new FormValidator(
  selectorsNamesForValidation,
  formForAddCard
);

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc);
}

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const popupVisible = document.querySelector(".popup_opened");
    closePopup(popupVisible);
  }
}

function openPropfilePopup() {
  authorProfileInput.value = authorProfile.textContent;
  authorJobProfileInput.value = authorJobProfile.textContent;
  validatorFormForEditAuthor.resetValidation();
  openPopup(popupForEditAuthor);
}

function submitProfileInfo(evt) {
  evt.preventDefault();
  authorProfile.textContent = authorProfileInput.value;
  authorJobProfile.textContent = authorJobProfileInput.value;
  closePopup(popupForEditAuthor);
}

function renderCard(elementPlace, element) {
  elementPlace.prepend(element);
}

function handleNewCard(card) {
  const newCard = new Card(card, "#card").generateCard();
  return newCard;
}

function submitAddCard(evt) {
  evt.preventDefault();

  const cardContainer = [];
  cardContainer.link = formInputImage.value;
  cardContainer.name = formInputTitle.value;

  renderCard(cardElements, handleNewCard(cardContainer));

  closePopup(popupForAddCard);
  formForAddCard.reset();
}

window.onload = function () {
  const body = document.querySelector('.root');
  body.style.display = 'flex';
};

validatorFormForEditAuthor.enableValidation();
validatorFromForAddCard.enableValidation();

profileEditOpenBtn.addEventListener("click", openPropfilePopup);
cardAddOpenBtn.addEventListener("click", () => {
  formForAddCard.reset();
  validatorFromForAddCard.resetValidation();
  openPopup(popupForAddCard);
});

formForEditAuthor.addEventListener("submit", submitProfileInfo);
formForAddCard.addEventListener("submit", submitAddCard);

popupList.forEach((item) => {
  item.addEventListener("mousedown", function (evt) {
    if (
      evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close")
    ) {
      closePopup(item);
    }
  });
});

export { openPopup }