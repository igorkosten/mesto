const container = document.querySelector('.popup__container');
const inputName = document.querySelector('.popup__input-name');
const inputDesciptoin = document.querySelector('.popup__input-desciptoin')
const profileTitle = document.querySelector('.profile__title')
const profileSubTitle = document.querySelector('.profile__subtitle')
const ButtonClose = document.querySelector('.popup__button-close')
const profileEditButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const likeButton = document.querySelectorAll('.elements__like-button')

container.addEventListener('submit', (event) => {
  event.preventDefault();

  profileTitle.innerHTML = inputName.value;
  inputName.value = '';

  profileSubTitle.innerHTML = inputDesciptoin.value;
  inputDesciptoin.value = '';

  popup.classList.remove('popup_opened')
})

ButtonClose.addEventListener('click', function (){
  popup.classList.remove('popup_opened')
})

profileEditButton.addEventListener('click', function (){
  inputName.value = profileTitle.innerHTML;
  inputDesciptoin.value = profileSubTitle.innerHTML;
  popup.classList.add('popup_opened')
})

likeButton.forEach(function (element) {
  element.onclick=function (){
    if (element.classList.contains('elements__like-button_active'))
  {
    element.classList.remove('elements__like-button_active')
  }
    else {
      element.classList.add('elements__like-button_active')
    }
  }
});
