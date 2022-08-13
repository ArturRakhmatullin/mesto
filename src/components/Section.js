export class Section {
    constructor ({ items, renderer }, sectionSelector) {
      this._items = items;
      this._renderer = renderer;
      this._section = sectionSelector;
  // не могу понять почему при написании document.querySelector(sectionSelector) консоль выдает ошибку: 
  // Failed to execute 'querySelector' on 'Document': '[object HTMLDivElement]' is not a valid selector.
  // Прошу помочь (если еще есть необходимость поправить код)
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