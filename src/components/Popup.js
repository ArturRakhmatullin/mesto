export default class Popup {
    constructor({ popupSelector }) {
      this._popupEl = document.querySelector(popupSelector);
    // Все сделал как вы и говорили, но теперь выдает ошибку((
    // Uncaught TypeError: Cannot read properties of null (reading 'querySelector')
    // at new PopupWithImage
      this.activePopupClass = '.popup_opened';
      this.closeBtnClass = '.popup__close';
      this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
      this._popupEl.classList.add(this.activePopupClass);
      document.addEventListener('keyup', this._handleEscClose);
    }
  
    close() {
      this._popupEl.classList.remove(this.activePopupClass);
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
      });
    }
  }