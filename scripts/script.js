const form = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__form-input-name');
const inputDesciptoin = document.querySelector('.popup__form-input-desciptoin')
const profileTitle = document.querySelector('.profile__title')
const profileSubTitle = document.querySelector('.profile__subtitle')
const formButtonClose = document.querySelector('.popup__form-button-close')
const profileEditButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const likeButton = document.querySelectorAll('.elements__like-button')

form.addEventListener('submit', (event) => {
  event.preventDefault();

  profileTitle.innerHTML = inputName.value;
  inputName.value = '';

  profileSubTitle.innerHTML = inputDesciptoin.value;
  inputDesciptoin.value = '';

  popup.classList.remove('active')
})


formButtonClose.addEventListener('click', function (){
  popup.classList.remove('active')
})

profileEditButton.addEventListener('click', function (){
  inputName.value = profileTitle.innerHTML;
  inputDesciptoin.value = profileSubTitle.innerHTML;
  popup.classList.add('active')
})

// profileEditButton.addEventListener('click', function (){

// inputName.innerHTML = profileTitle.value;
// profileTitle.value = '';
// })


likeButton.forEach(function (element) {
  element.onclick=function (){
    if (element.classList.contains('activ'))
  {
    element.classList.remove('activ')
  }
    else {
      element.classList.add('activ')
    }
  }
});
