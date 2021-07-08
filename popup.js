const PopupButton = document.querySelector(".button-contacts");
const Popup = document.querySelector(".popup");
const PopupClose = Popup.querySelector(".close-popup");
const loginLogin = Popup.querySelector(".login-user");
const FormWriteUs = Popup.querySelector(".form-write-us");
const EmailPassword = Popup.querySelector(".email-user");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}


PopupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
   Popup.classList.add("popup-show");

   if (storage) {
    loginLogin.value = storage;
    EmailPassword.focus();
  } else {
    loginLogin.focus();
  }
});


PopupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  Popup.classList.remove("popup-show");
  Popup.classList.remove("popup-error");
});


FormWriteUs.addEventListener("submit", function (evt) {
    if (!loginLogin.value || !EmailPassword.value){
    evt.preventDefault();
    Popup.classList.remove("popup-error");
    Popup.offsetWidth = Popup.offsetWidth;
    Popup.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", loginLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (Popup.classList.contains("popup-show")) {
      evt.preventDefault();
      Popup.classList.remove("popup-show");
    }
  }
});
