let root = document.querySelector('.root');
const profileName = root.querySelector('.name__content');
const profileProfession = root.querySelector('.profession');
let popup = root.querySelector('.popup');
let pencil = root.querySelector('.name__rectangle');
let close = root.querySelector('.form__close');
let formElement = root.querySelector('.popup__form');
let nameInput = root.querySelector('.form__nameforedit');
let jobInput = root.querySelector('.form__professionforedit');


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
