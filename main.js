(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var n,r;return n=t,(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(e),about:"".concat(t)})}).then(this._checkResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(e),link:"".concat(t)})}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.data,o=t.handleCardClick,i=t.handleDeleteButton,c=t.userId;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._likes=r.likes,this._cardId=r._id,this._ownerId=r.owner._id,this._handleCardClick=o,this._handleDeleteButton=i,this._userId=c,this._cardSelector=n}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".elements__card").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(t){e._handleCardClick(t)})),this._element.querySelector(".elements__like").addEventListener("click",(function(t){e._handleLikeClick(t)})),this._element.querySelector(".elements__delete").addEventListener("click",(function(){e._handleDeleteButton(e._cardId,e)}))}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".elements__photo"),this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".elements__cardname").textContent=this._name,this._userId!==this._ownerId&&(this._element.querySelector(".elements__delete").style.display="none"),-1!=this._likes.findIndex((function(t){return t._id===e._userId}))&&this.target.classList.add("elements__like_active"),this._element}},{key:"_handleLikeClick",value:function(e){e.target.classList.toggle("elements__like_active")}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=i((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._config.inputErrorClass),n.textContent=t,n.classList.add(r._config.errorClass)})),c(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._config.inputErrorClass),t.classList.remove(r._config.errorClass),t.textContent=" "})),c(this,"_isValid",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),c(this,"toggleButtonState",(function(){r._hasInvalidInput()?(r._submitButton.classList.add(r._config.inactiveButtonClass),r._submitButton.setAttribute("disabled","")):(r._submitButton.classList.remove(r._config.inactiveButtonClass),r._submitButton.removeAttribute("disabled",""))})),c(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),c(this,"_setEventListeners",(function(){r.toggleButtonState(),r.repeatValidation(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._isValid(e),r.toggleButtonState()}))}))})),c(this,"repeatValidation",(function(){r.toggleButtonState(),r._inputList.forEach((function(e){r._hideInputError(e)}))})),c(this,"enableValidation",(function(){r._setEventListeners()})),this._config=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._submitButton=this._formElement.querySelector(this._config.submitButtonSelector)}));function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._section=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._section.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupEl=document.querySelector(t),this.activePopupClass="popup_opened",this.closeBtnClass="popup__close",this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupEl.classList.add(this.activePopupClass),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popupEl.classList.remove(this.activePopupClass),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupEl.addEventListener("click",(function(t){(t.target===t.currentTarget||t.target.classList.contains(e.closeBtnClass))&&e.close()}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function m(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function c(e,t){var n,r=t.callbackSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._callbackSubmitForm=r,n._formEl=n._popupEl.querySelector(".popup__form"),n._inputList=n._popupEl.querySelectorAll(".popup__info"),n._submitButton=n._popupEl.querySelectorAll(".popup__submit"),n}return t=c,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;_(b(c.prototype),"setEventListeners",this).call(this),this._formEl.addEventListener("submit",(function(t){t.preventDefault(),e._callbackSubmitForm(e._getInputValues()),e.close()}))}},{key:"close",value:function(){_(b(c.prototype),"close",this).call(this),this._formEl.reset()}},{key:"toggleButtonText",value:function(e){this._submitButton.textContent=e}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(f);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function S(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._popupNameEl=t._popupEl.querySelector(".popup__name"),t._popupImgEl=t._popupEl.querySelector(".popup__image"),t}return t=c,(n=[{key:"open",value:function(e){w(C(c.prototype),"open",this).call(this),this._popupNameEl.textContent=e.alt,this._popupImgEl.alt=e.alt,this._popupImgEl.src=e.src}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(f);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){var n=t.placeForName,r=t.placeForProfession;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._placeForName=document.querySelector(n),this._placeForProfession=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._placeForName.textContent,about:this._placeForProfession.textContent}}},{key:"setUserInfo",value:function(e){this._placeForName.textContent=e.name,this._placeForProfession.textContent=e.about,this._id=e._id}},{key:"getUserId",value:function(){return this._id}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function x(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return F(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function c(e,t){var n,r,o,a,u=t.confirmRemove;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),a=function(e){e.preventDefault(),n._confirmRemove(n._cardId,n._card)},(o="_handleConfirmRemove")in(r=F(n=i.call(this,e)))?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,n._confirmRemove=u,n._formEl=n._popupEl.querySelector(".popup__form"),n}return t=c,(n=[{key:"open",value:function(e,t){this._cardId=e,this._card=t,B(U(c.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){this._formEl.addEventListener("submit",this._handleConfirmRemove),B(U(c.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._formEl.removeEventListener("submit",this._handleConfirmRemove),B(U(c.prototype),"close",this).call(this)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(f),V={formSelector:".popup__form",inputSelector:".popup__info",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_inactive",inputErrorClass:"popup__info_type_error",errorClass:"popup__error_visible"},N=document.querySelector(".profile__rename"),A=document.querySelector(".profile__button"),G=document.querySelector(".popup__form_rename"),J=document.querySelector(".popup__form_type_append-card"),z=document.querySelector(".profile__name"),H=document.querySelector(".profile__profession"),M=G.querySelector(".popup__info_type_name"),K=G.querySelector(".popup__info_type_profession"),Q=J.querySelector(".popup__info_type_place"),W=J.querySelector(".popup__info_type_email");document.querySelector(".elements__cardname");var X=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-50",headers:{authorization:"602fce52-47ee-402a-b2dd-b2ee3d1cac69","Content-Type":"application/json"}}),Y=new I({placeForName:".profile__name",placeForProfession:".profile__profession"}),Z=new l({renderer:function(e){var t=te(e);Z.addItem(t)}},".cards");Promise.all([X.getProfileInfo(),X.getInitialCards()]).then((function(e){Y.setUserInfo(e[0]),Z.renderItems(e[1])})).catch((function(e){return console.error(e)}));var $=new P(".popup_type_fullscreen");$.setEventListeners();var ee=new D(".popup_type_remove",{confirmRemove:function(e,t){X.removeCard(e).then((function(e){t.removeCard(),ee.close()})).catch((function(e){return console.error(e)}))}});function te(e){return new r({data:e,handleCardClick:function(e,t){$.open(e,t)},handleDeleteButton:function(e,t){ee.open(e,t)},userId:Y.getUserId()},"#elements").generateCard()}var ne=new v(".popup_type_rename",{callbackSubmitForm:function(e){ne.toggleButtonText("Сохранение..."),X.editProfile(e.name,e.about).then((function(e){Y.setUserInfo(e),ne.close()})).catch((function(e){return console.error(e)})).finally((function(){ne.toggleButtonText("Сохранить")}))}});ne.setEventListeners();var re=new v(".popup_type_append",{callbackSubmitForm:function(e){re.toggleButtonText("Сохранение..."),X.addCard(e.name,e.link).then((function(e){var t=te(e);Z.addItem(t),re.close()})).catch((function(e){return console.error(e)})).finally((function(){re.toggleButtonText("Создать")}))}});re.setEventListeners();var oe=new a(V,G),ie=new a(V,J);oe.enableValidation(),ie.enableValidation(),N.addEventListener("click",(function(){ne.open(),function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(Y.getUserInfo()),M.value=z.textContent,K.value=H.textContent,oe.repeatValidation()})),A.addEventListener("click",(function(){re.open(),Q.value="",W.value="",ie.repeatValidation()}))})();