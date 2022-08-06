export default class FormValidator {
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

    toggleButtonState = () => {
        if (this._hasInvalidInput()) {
            this._submitButton.classList.add(this._config.inactiveButtonClass);
            this._submitButton.setAttribute('disabled', '');
        } else {
            this._submitButton.classList.remove(this._config.inactiveButtonClass);
            this._submitButton.removeAttribute('disabled', '');
        }
    }

    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }

    _setEventListeners = () => {
        this.toggleButtonState();
        this.repeatValidation();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this.toggleButtonState();
            });
        })
    }

    repeatValidation = () => {
        this.toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
    }

    enableValidation = () => {
        this._setEventListeners();
    }
}