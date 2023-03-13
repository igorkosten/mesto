const container = document.querySelector('.popup__container');
const inputName = document.querySelector('.popup__input_name');
const inputDesciptoin = document.querySelector('.popup__input_desciptoin')
const profileTitle = document.querySelector('.profile__title')
const profileSubTitle = document.querySelector('.profile__subtitle')
const buttonClose = document.querySelector('.popup__button-close')
const profileEditButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
// const likeButton = document.querySelectorAll('.elements__like-button')

function remove(){
  popup.classList.remove('popup_opened')
}

container.addEventListener('submit', (event) => {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubTitle.textContent = inputDesciptoin.value;
  remove()
})

buttonClose.addEventListener('click', remove
)

profileEditButton.addEventListener('click', function (){
  inputName.value = profileTitle.textContent;
  inputDesciptoin.value = profileSubTitle.textContent;
  popup.classList.add('popup_opened')
})

// likeButton.forEach(function (element) {
//   element.onclick=function (){
//     if (element.classList.contains('elements__like-button_active'))
//   {
//     element.classList.remove('elements__like-button_active')
//   }
//     else {
//       element.classList.add('elements__like-button_active')
//     }
//   }
// });
