const form = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input_content_name');
const inputDesciptoin = document.querySelector('.popup__input_content_desciptoin')
const profileTitle = document.querySelector('.profile__title')
const profileSubTitle = document.querySelector('.profile__subtitle')
const buttonClose = document.querySelector('.popup__button-close')
const profileEditButton = document.querySelector('.profile__edit-button')
const popup_profile = document.querySelector('.popup_profile')
const likeButton = document.querySelectorAll('.elements__like-button')
const elementAddButtom = document.querySelector('.profile__add-button')
const popupAdd = document.querySelector('.popup_items-add')
const formAdd = document.querySelector('.popup__form_items-add')

const inputPlace = document.querySelector('.popup__input_place_name')
const inputUrl = document.querySelector('.popup__input_place_url')
const buttonCloseAdd = document.querySelector('.popup__button-close_items-add')

const popupImageView = document.querySelector('.popup_image-view')
const buttonCloseImageView = document.querySelector('.popup__button-close_image-view')




// Всё про карточку с профайлом

function remove(){
  popup_profile.classList.remove('popup_opened')
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubTitle.textContent = inputDesciptoin.value;
  remove()
})

buttonClose.addEventListener('click', remove)

profileEditButton.addEventListener('click', function (){
  inputName.value = profileTitle.textContent;
  inputDesciptoin.value = profileSubTitle.textContent;
  popup_profile.classList.add('popup_opened')
})



// большая функция по первоначальному созданию всех карточек


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const createCadr = (name,link) => {

  let myCard=document.createElement('li')
  myCard.classList.add('elements__item')
  document.querySelector('.elements__items').append(myCard)

  let imgCard=document.createElement('img')
  imgCard.classList.add('elements__item-image')
  imgCard.addEventListener('click', function (){
    popupImageView.classList.add('popup_opened')
  })
  imgCard.src=link
  myCard.append(imgCard)

  let buttonCard=document.createElement('button')
  buttonCard.classList.add('elements__basket-button')
  myCard.append(buttonCard)
  buttonCard.addEventListener('click', function (){
  myCard.remove()
  })

  let img2Card=document.createElement('img')
  img2Card.classList.add('elements__image-button')
  img2Card.src="./images/Trash.svg"
  buttonCard.append(img2Card)

  let divCard=document.createElement('div')
  divCard.classList.add('elements__wrapper')
  myCard.append(divCard)

  let h2Card=document.createElement('h2')
  h2Card.classList.add('elements__item-title')
  h2Card.innerHTML = name
  divCard.append(h2Card)

  let button2Card=document.createElement('button')
  button2Card.classList.add('elements__like-button')
  button2Card.onclick = function () { 
    (button2Card.classList.toggle('elements__like-button_active'))
  }
  divCard.append(button2Card)
}


// Всё про добавление карточки

elementAddButtom.addEventListener('click', function (){

  popupAdd.classList.add('popup_opened')
})

formAdd.addEventListener('submit', (event) => {
  event.preventDefault();
// найти инпуты
// вызвать функцию, которая добавит карточку
createCadr(inputPlace.value,inputUrl.value) 
// в неё сунуть значения из двух инпутов

// закрыть попап
popupAdd.classList.remove('popup_opened')
})

buttonCloseAdd.addEventListener('click', function(){
  popupAdd.classList.remove('popup_opened')
}
)


initialCards.forEach(function (element) {
  createCadr(element.name,element.link)
});


// Всплывающая картинка

buttonCloseImageView.addEventListener('click', function(){
  popupImageView.classList.remove('popup_opened')
}
)

  // imgCard.onclick = function () { 
  //   (imgCard.classList.toggle('elements__item-image_active'))
  // }
