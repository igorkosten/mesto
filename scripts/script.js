const formEditProfile = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input_content_name');
const inputDesciptoin = document.querySelector('.popup__input_content_desciptoin');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__subtitle');
const buttonCloseFormEditProfile = document.querySelector('.popup__button-close_edit-form');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const elementAddButtom = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_items-add');
const formAdd = document.querySelector('.popup__form_items-add');

const inputPlace = document.querySelector('.popup__input_place_name');
const inputUrl = document.querySelector('.popup__input_place_url');
const buttonCloseAdd = document.querySelector('.popup__button-close_items-add');

const popupImageView = document.querySelector('.popup_image-view');
const buttonCloseImageView = document.querySelector('.popup__button-close_image-view');

// две универсальные функции openPopup и closePopup


function openPopup(popup){
  popup.classList.add('popup_opened');
}

function closePopup(popup){
  popup.classList.remove('popup_opened');
}


formEditProfile.addEventListener('submit', (event) => {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubTitle.textContent = inputDesciptoin.value;
  closePopup(popupProfile);
});

buttonCloseFormEditProfile.addEventListener('click', ()=>{
  closePopup(popupProfile);
});

profileEditButton.addEventListener('click', function (){
  inputName.value = profileTitle.textContent;
  inputDesciptoin.value = profileSubTitle.textContent;
  openPopup(popupProfile);
});

// 1. createCard метод должен только создавать карточку,
//получив имя и ссылку, он должен клонировать темплейт, указать данные, установить листенеры
//и вернуть созданную карточку.
//2. renderCard метод должен так принять ссылку и имя, вызвать внутри createCard
// и добавить результат вызова на страницу. 
//Места, где сейчас вызывается createCard нужно заменить на  renderCard

// Создание карточек с помощью "template"

function createCard1 (item){
  const cardsItem = document.querySelector('.cards__item');
  const cardsTemplate = document.querySelector ('#cards-template');
  const cardsClone = cardsTemplate.content.querySelector('.cards__item').cloneNode(true);

  const cardsImage = cardsClone.querySelector('.cards__image');
  const cardsTitle = cardsClone.querySelector('.cards__title');

  cardsImage.crs = item.link;
  cardsImage.alt = item.name;
  cardsTitle.textContent = item.name;
  
  console.log(cardsItem)

  cardsItem.append(cardsClone);


  // cardsCloneCadrsImage.addEventListener('clic', function() {
  //   openPopupImageView()
  
  }
  



// большая функция по первоначальному созданию всех карточек

// const createCard = (name, link) => {

//   const myCard=document.createElement('li');
//   myCard.classList.add('elements__item');
//   document.querySelector('.elements__items').append(myCard);

//   const imgCard=document.createElement('img');
//   imgCard.classList.add('elements__item-image');
//   imgCard.addEventListener('click', function (){
//     openPopup(popupImageView);
//     document.querySelector('.popup__picture').src=link;
//     document.querySelector('.popup__picture').alt=name;
//     document.querySelector('.popup__image-caption').textContent=name;
//   });
//   imgCard.src=link;
//   imgCard.alt=name;
//   myCard.append(imgCard);

//   const buttonDeleteCard=document.createElement('button');
//   buttonDeleteCard.classList.add('elements__basket-button');
//   myCard.append(buttonDeleteCard);
//   buttonDeleteCard.addEventListener('click', function (){
//   myCard.remove();
//   });

//   const imgButtonDeleteCard=document.createElement('img');
//   imgButtonDeleteCard.classList.add('elements__image-button');
//   imgButtonDeleteCard.src="./images/Trash.svg";
//   buttonDeleteCard.append(imgButtonDeleteCard);

//   const divCard=document.createElement('div');
//   divCard.classList.add('elements__wrapper');
//   myCard.append(divCard);

//   const itemTitle=document.createElement('h2');
//   itemTitle.classList.add('elements__item-title');
//   itemTitle.innerHTML = name;
//   divCard.append(itemTitle);

//   const likeButton=document.createElement('button');
//   likeButton.classList.add('elements__like-button');
//   likeButton.onclick = function () { 
//     (likeButton.classList.toggle('elements__like-button_active'));
//   }
//   divCard.append(likeButton);
// }


// Всё про добавление карточки

elementAddButtom.addEventListener('click', function (){
  openPopup(popupAdd);
});

formAdd.addEventListener('submit', (event) => {
  event.preventDefault();
// найти инпуты
// вызвать функцию, которая добавит карточку
// в неё сунуть значения из двух инпутов
createCard(inputPlace.value,inputUrl.value);
// очистить поля
formAdd.reset();
// закрыть попап
closePopup(popupAdd);
});

buttonCloseAdd.addEventListener('click', function(){
  closePopup(popupAdd);
});

initialCards.forEach(function (item) {
  // createCard(element.name,element.link);
  // console.log(item)
  createCard1 (item)
});


// initialCards.forEach(function (element) {
//   createCard(element.name,element.link);
// });


// Всплывающая картинка


buttonCloseImageView.addEventListener('click', function(){
  closePopup(popupImageView);
});