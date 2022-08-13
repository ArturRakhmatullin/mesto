export default class Popup {
    constructor(popupSelector) {
      this._popupEl = popupSelector;
  // не могу понять почему при написании document.querySelector(popupSelector) консоль выдает ошибку: 
  // Failed to execute 'querySelector' on 'Document': '[object HTMLDivElement]' is not a valid selector.
  // Прошу помочь (если еще есть необходимость поправить код)

      this.activePopupClass = 'popup_opened';
      this.closeBtnClass = 'popup__close';
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