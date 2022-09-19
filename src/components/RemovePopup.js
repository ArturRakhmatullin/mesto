import Popup from './Popup.js'

export default class RemovePopup extends Popup {
    constructor(popupSelector, { confirmRemove }) {
        super(popupSelector);
        this._confirmRemove = confirmRemove;
        this._formEl = this._popupEl.querySelector('.popup__form');
      }

      open(cardId, newCard) {
          this._cardId = cardId;
          this._card = newCard;
          super.open();
      }

      setEventListeners() {
        super.setEventListeners();
        this._formEl.addEventListener('submit', (event) => {
            event.preventDefault();
            this._confirmRemove(this._cardId, this._card);
        });
      }
      
      close() {
        super.close();
        this._formEl.reset();
      }
}