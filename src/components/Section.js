export class Section {
    constructor ({ renderer }, sectionSelector) {
      this._renderer = renderer;
      this._section = document.querySelector(sectionSelector);
    }
    
    addItem(el) {
      this._section.prepend(el);
    }

    renderItems(items) {
      items.forEach((el) => {
        this._renderer(el);
      });
    }
  }