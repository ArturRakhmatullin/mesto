export default class Popup {
    constructor(popupSelector) {
      this._popupEl = document.querySelector(popupSelector);
      this.closeBtnClass = 'popup__close';
      this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
      this._popupEl.classList.add('popup_opened');
      document.addEventListener('keyup', this._handleEscClose);
    }
  
    close() {
      this._popupEl.classList.remove('popup_opened');
      document.removeEventListener('keyup', this._handleEscClose);
    }
  
    _handleEscClose(event) {
      if (event.key === 'Escape')
        this.close();
    }
  
    setEventListeners() {
      this._popupEl.addEventListener('click', event => {
        if (event.target === event.currentTarget || event.target.classList.contains(this.closeBtnClass))
          this.close();
      }, { once: true });
    }
  }