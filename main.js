(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var n,r;return n=t,(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._likes=t.likes,this._cardId=t._id,this._ownerId=t.owner._id,this._cardSelector=n,this._handleCardClick=r,this._userId=o}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".elements__card").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(t){e._handleCardClick(t)})),this._element.querySelector(".elements__like").addEventListener("click",(function(t){e._handleLikeClick(t)})),this._element.querySelector(".elements__delete").addEventListener("click",(function(t){e._handleDeleteButton(t)}))}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".elements__photo"),this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".elements__cardname").textContent=this._name,this._userId!==this._ownerId&&(this._element.querySelector(".elements__delete").style.display="none"),-1!=this._likes.findIndex((function(t){return t._id===e._userId}))&&this.target.classList.add("elements__like_active"),this._element}},{key:"_handleLikeClick",value:function(e){e.target.classList.toggle("elements__like_active")}},{key:"_handleDeleteButton",value:function(){this._element.remove()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=i((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._config.inputErrorClass),n.textContent=t,n.classList.add(r._config.errorClass)})),a(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._config.inputErrorClass),t.classList.remove(r._config.errorClass),t.textContent=" "})),a(this,"_isValid",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),a(this,"toggleButtonState",(function(){r._hasInvalidInput()?(r._submitButton.classList.add(r._config.inactiveButtonClass),r._submitButton.setAttribute("disabled","")):(r._submitButton.classList.remove(r._config.inactiveButtonClass),r._submitButton.removeAttribute("disabled",""))})),a(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),a(this,"_setEventListeners",(function(){r.toggleButtonState(),r.repeatValidation(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._isValid(e),r.toggleButtonState()}))}))})),a(this,"repeatValidation",(function(){r.toggleButtonState(),r._inputList.forEach((function(e){r._hideInputError(e)}))})),a(this,"enableValidation",(function(){r._setEventListeners()})),this._config=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._submitButton=this._formElement.querySelector(this._config.submitButtonSelector)}));function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._section=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._section.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupEl=document.querySelector(t),this.activePopupClass="popup_opened",this.closeBtnClass="popup__close",this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupEl.classList.add(this.activePopupClass),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popupEl.classList.remove(this.activePopupClass),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupEl.addEventListener("click",(function(t){(t.target===t.currentTarget||t.target.classList.contains(e.closeBtnClass))&&e.close()}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function m(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._callbackSubmitForm=t,n._formEl=n._popupEl.querySelector(".popup__form"),n._inputList=n._popupEl.querySelectorAll(".popup__info"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;d(v(a.prototype),"setEventListeners",this).call(this),this._formEl.addEventListener("submit",(function(t){t.preventDefault(),e._callbackSubmitForm(e._getInputValues()),e.close()}))}},{key:"close",value:function(){d(v(a.prototype),"close",this).call(this),this._formEl.reset()}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(p);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function C(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupNameEl=t._popupEl.querySelector(".popup__name"),t._popupImgEl=t._popupEl.querySelector(".popup__image"),t}return t=a,(n=[{key:"open",value:function(e){w(O(a.prototype),"open",this).call(this),this._popupNameEl.textContent=e.alt,this._popupImgEl.alt=e.alt,this._popupImgEl.src=e.src}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(p);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){var n=t.placeForName,r=t.placeForProfession;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._placeForName=document.querySelector(n),this._placeForProfession=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._placeForName.textContent,profession:this._placeForProfession.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.profession;this._placeForName.textContent=t,this._placeForProfession.textContent=n,this._id=data._id}},{key:"getUserId",value:function(){return this._id}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),L={formSelector:".popup__form",inputSelector:".popup__info",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_inactive",inputErrorClass:"popup__info_type_error",errorClass:"popup__error_visible"},q=document.querySelector(".profile__rename"),B=document.querySelector(".profile__button"),R=document.querySelector(".popup__form_rename"),T=document.querySelector(".popup__form_type_append-card"),x=document.querySelector(".profile__name"),F=document.querySelector(".profile__profession"),U=R.querySelector(".popup__info_type_name"),V=R.querySelector(".popup__info_type_profession"),N=T.querySelector(".popup__info_type_place"),D=T.querySelector(".popup__info_type_email");document.querySelector(".elements__cardname");var A=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-50",headers:{authorization:"602fce52-47ee-402a-b2dd-b2ee3d1cac69","Content-Type":"application/json"}}),G=new s({items:A,renderer:function(e){var t=M(e);G.addItem(t)}},".cards");Promise.all([A.getProfileInfo(),A.getInitialCards()]).then((function(e){H.setUserInfo(e[0]),G.renderItems(e[1])})).catch((function(e){return console.error(e)}));var z=new P(".popup_type_fullscreen");function M(e){return new r({data:e,handleCardClick:function(e,t){z.open(e,t)},userId:H.getUserId()},"#elements").generateCard()}z.setEventListeners();var H=new I({placeForName:".profile__name",placeForProfession:".profile__profession"}),J=new b(".popup_type_rename",(function(e){H.setUserInfo(e)}));J.setEventListeners();var K=new b(".popup_type_append",(function(e){G.addItem(M(e))}));K.setEventListeners();var Q=new c(L,R),W=new c(L,T);Q.enableValidation(),W.enableValidation(),q.addEventListener("click",(function(){J.open(),function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(H.getUserInfo()),U.value=x.textContent,V.value=F.textContent,Q.repeatValidation()})),B.addEventListener("click",(function(){K.open(),N.value="",D.value="",W.repeatValidation()}))})();