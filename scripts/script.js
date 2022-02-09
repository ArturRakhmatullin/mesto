let root = document.querySelector('.root');
const profileName = root.querySelector('.profile__name');
const profileProfession = root.querySelector('.profile__profession');
let popup = root.querySelector('.popup');
let pencil = root.querySelector('.profile__rename');
let close = root.querySelector('.popup__close');
let formElement = root.querySelector('.popup__container');
let nameInput = root.querySelector('.popup__nameforedit');
let jobInput = root.querySelector('.popup__professionforedit');


function openPopup() {
    popup.classList.add('popup-opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
}

function closePopup() {
    popup.classList.remove('popup-opened');
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
