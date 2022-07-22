const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__info',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__info_type_error',
    errorClass: 'popup__error_visible'
}

class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        this._submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
    }

    _showInputError = (inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._config.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._config.errorClass);
    };

    _hideInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._config.inputErrorClass);
        errorElement.classList.remove(this._config.errorClass);
        errorElement.textContent = ' ';
    };
  
    _isValid = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    toggleButtonState = (inputList, buttonElement) => {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._config.inactiveButtonClass);
            buttonElement.setAttribute('disabled', '');
        } else {
            buttonElement.classList.remove(this._config.inactiveButtonClass);
            buttonElement.removeAttribute('disabled', '');
        }
    }

    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }

    _setEventListeners = () => {

        this.toggleButtonState(this._inputList, this._submitButton);
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this.toggleButtonState(this._inputList, this._submitButton);
            });
        })
    }

    enableValidation = () => {
        this._setEventListeners();
    }
}

export { config, FormValidator };