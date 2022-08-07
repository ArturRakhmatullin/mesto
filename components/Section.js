export class Section {
    constructor ({ items, renderer }, sectionSelector) {
      this._items = items;
      this._renderer = renderer;
      this._section = sectionSelector;
    }
    
    addItem(el) {
      this._section.prepend(el);
    }

    renderItems() {
      this._items.forEach((el) => {
        this._renderer(el);
      });
    }
  }