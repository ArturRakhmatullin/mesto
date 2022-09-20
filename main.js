(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var n,r;return n=t,(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(e),about:"".concat(t)})}).then(this._checkResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:"".concat(e)})}).then(this._checkResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(e),link:"".concat(t)})}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t,n){var o=this,i=t.data,a=t.handleCardClick,c=t.handleDeleteButton,u=t.handleCardAddLike,s=t.handleCardRemoveLike,l=t.userId;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"removeCard",(function(){o.elements__card.remove()})),r(this,"setLikesCount",(function(e){o._likesCounter.textContent=e})),r(this,"toggleLikeButton",(function(){o._likeBtn.classList.toggle("elements__like_active")})),this._name=i.name,this._link=i.link,this._likes=i.likes,this._cardId=i._id,this._ownerId=i.owner._id,this._handleCardClick=a,this._handleDeleteButton=c,this._handleCardAddLike=u,this._handleCardRemoveLike=s,this._userId=l,this._cardSelector=n}var t,o;return t=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._element.querySelector(".elements__delete").addEventListener("click",(function(){e._handleDeleteButton(e._cardId,e)})),this._likeBtn.addEventListener("click",(function(t){t.target.classList.contains("elements__like_active")?e._handleCardRemoveLike(e._cardId,e):e._handleCardAddLike(e._cardId,e)}))}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._likesCounter=this._element.querySelector(".elements__like-counter"),this._likeBtn=this._element.querySelector(".elements__like"),this._cardImage=this._element.querySelector(".elements__photo"),this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this.elements__card=this._element.querySelector(".elements__card"),this.setLikesCount(this._likes.length),this._element.querySelector(".elements__cardname").textContent=this._name,this._userId!==this._ownerId&&(this._element.querySelector(".elements__delete").style.display="none"),-1!=this._likes.findIndex((function(t){return t._id===e._userId}))&&this._likeBtn.classList.add("elements__like_active"),this._element}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=a((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._config.inputErrorClass),n.textContent=t,n.classList.add(r._config.errorClass)})),c(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._config.inputErrorClass),t.classList.remove(r._config.errorClass),t.textContent=" "})),c(this,"_isValid",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),c(this,"toggleButtonState",(function(){r._hasInvalidInput()?(r._submitButton.classList.add(r._config.inactiveButtonClass),r._submitButton.setAttribute("disabled","")):(r._submitButton.classList.remove(r._config.inactiveButtonClass),r._submitButton.removeAttribute("disabled",""))})),c(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),c(this,"_setEventListeners",(function(){r.toggleButtonState(),r.repeatValidation(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._isValid(e),r.toggleButtonState()}))}))})),c(this,"repeatValidation",(function(){r.toggleButtonState(),r._inputList.forEach((function(e){r._hideInputError(e)}))})),c(this,"enableValidation",(function(){r._setEventListeners()})),this._config=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._submitButton=this._formElement.querySelector(this._config.submitButtonSelector)}));function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._section=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._section.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupEl=document.querySelector(t),this.activePopupClass="popup_opened",this.closeBtnClass="popup__close",this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this.setEventListeners(),console.log("Привет 1"),this._popupEl.classList.add(this.activePopupClass),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popupEl.classList.remove(this.activePopupClass),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupEl.addEventListener("click",(function(t){(t.target===t.currentTarget||t.target.classList.contains(e.closeBtnClass))&&e.close()}),{once:!0})}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e,t){var n,r=t.callbackSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._callbackSubmitForm=r,n._formEl=n._popupEl.querySelector(".popup__form"),n._inputList=n._popupEl.querySelectorAll(".popup__info"),n._submitButton=n._popupEl.querySelectorAll(".popup__submit"),n}return t=a,(n=[{key:"loading",value:function(e){this._submitButton.textContent=e}},{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;_(b(a.prototype),"setEventListeners",this).call(this),this._formEl.addEventListener("submit",(function(t){t.preventDefault(),e._callbackSubmitForm(e._getInputValues())}))}},{key:"close",value:function(){_(b(a.prototype),"close",this).call(this),this._formEl.reset()}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(p);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function O(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupNameEl=t._popupEl.querySelector(".popup__name"),t._popupImgEl=t._popupEl.querySelector(".popup__image"),t}return t=a,(n=[{key:"open",value:function(e,t){w(L(a.prototype),"open",this).call(this),this._popupNameEl.textContent=e,this._popupImgEl.alt=e,this._popupImgEl.src=t}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(p);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){var n=t.placeForName,r=t.placeForProfession,o=t.avatarImg;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._placeForName=document.querySelector(n),this._placeForProfession=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._placeForName.textContent,about:this._placeForProfession.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this._placeForName.textContent=e.name,this._placeForProfession.textContent=e.about,this._id=e._id,this._avatar.src=e.avatar}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar}},{key:"getUserId",value:function(){return this._id}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function x(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function a(e,t){var n,r=t.confirmRemove;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._confirmRemove=r,n._formEl=n._popupEl.querySelector(".popup__form"),n}return t=a,(n=[{key:"open",value:function(e,t){this._cardId=e,this._card=t,B(A(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;B(A(a.prototype),"setEventListeners",this).call(this),this._formEl.addEventListener("submit",(function(t){t.preventDefault(),e._confirmRemove(e._cardId,e._card)}))}},{key:"close",value:function(){B(A(a.prototype),"close",this).call(this),this._formEl.reset()}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(p),D={formSelector:".popup__form",inputSelector:".popup__info",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_inactive",inputErrorClass:"popup__info_type_error",errorClass:"popup__error_visible"},V=document.querySelector(".profile__rename"),N=document.querySelector(".profile__button"),J=document.querySelector(".popup_type_edit-avatar"),G=(document.querySelector(".profile__avatar"),document.querySelector(".profile__editavatar")),H=(J.querySelector("#avatar"),J.querySelector(".popup__form")),z=document.querySelector(".popup__form_rename"),M=document.querySelector(".popup__form_type_append-card"),K=document.querySelector(".profile__name"),Q=document.querySelector(".profile__profession"),W=z.querySelector(".popup__info_type_name"),X=z.querySelector(".popup__info_type_profession"),Y=M.querySelector(".popup__info_type_place"),Z=M.querySelector(".popup__info_type_email");document.querySelector(".elements__cardname");var $=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-50",headers:{authorization:"602fce52-47ee-402a-b2dd-b2ee3d1cac69","Content-Type":"application/json"}}),ee=new I({placeForName:".profile__name",placeForProfession:".profile__profession",avatarImg:".profile__avatar"}),te=new l({renderer:function(e){var t=oe(e);te.addItem(t)}},".cards");Promise.all([$.getProfileInfo(),$.getInitialCards()]).then((function(e){ee.setUserInfo(e[0]),te.renderItems(e[1])})).catch((function(e){console.log("Ошибка: ".concat(e))}));var ne=new P(".popup_type_fullscreen");ne.setEventListeners();var re=new F(".popup_type_remove",{confirmRemove:function(e,t){$.removeCard(e).then((function(){t.removeCard(),re.close()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}});function oe(e){return new o({data:e,handleCardClick:function(e,t){ne.open(e,t)},handleDeleteButton:function(e,t){re.open(e,t)},handleCardAddLike:function(e,t){$.addLike(e).then((function(e){t.setLikesCount(e.likes.length),t.toggleLikeButton()})).catch((function(e){return console.error(e)}))},handleCardRemoveLike:function(e,t){$.removeLike(e).then((function(e){t.setLikesCount(e.likes.length),t.toggleLikeButton()})).catch((function(e){return console.error(e)}))},userId:ee.getUserId()},"#elements").generateCard()}var ie=new g(".popup_type_rename",{callbackSubmitForm:function(e){ie.loading("Сохранение..."),$.editProfile(e.name,e.about).then((function(e){ee.setUserInfo(e),ie.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ie.loading("Сохранение...")}))}});ie.setEventListeners();var ae=new g(".popup_type_edit-avatar",{callbackSubmitForm:function(e){ae.loading("Сохранение..."),$.editAvatar(e.avatar).then((function(e){ee.setUserAvatar(e),ae.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ae.loading("Сохранить")}))}});ae.setEventListeners();var ce=new g(".popup_type_append",{callbackSubmitForm:function(e){ce.loading("Сохранение..."),$.addCard(e.name,e.link).then((function(e){var t=oe(e);te.addItem(t),ce.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ce.loading("Создать")}))}});ce.setEventListeners();var ue=new u(D,z),se=new u(D,M),le=new u(D,H);ue.enableValidation(),se.enableValidation(),le.enableValidation(),V.addEventListener("click",(function(){ie.open(),function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(ee.getUserInfo()),W.value=K.textContent,X.value=Q.textContent,ue.repeatValidation()})),N.addEventListener("click",(function(){ce.open(),Y.value="",Z.value="",se.repeatValidation()})),G.addEventListener("click",(function(){ae.open(),le.repeatValidation()}))})();