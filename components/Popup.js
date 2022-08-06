export class Popup {
    constructor(popupSelector) {
      this._popupEl = document.querySelector(popupSelector);
      this.activePopupClass = 'popup_opened';
      this.closeBtnClass = 'popup__close';
      this._handleEscClose = this._handleEscClose.bind(this);
    }
  
    open() {
      document.addEventListener('keyup', this._handleEscClose);
      this._popupEl.classList.add(this.activePopupClass);
    }
  
    close() {
      document.removeEventListener('keyup', this._handleEscClose);
      this._popupEl.classList.remove(this.activePopupClass);
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