const popupProfile = document.querySelector('.popup_profile');
const formEditProfile = popupProfile.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input_content_name');
const inputDesciptoin = document.querySelector('.popup__input_content_desciptoin');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__subtitle');
const buttonCloseFormEditProfile = document.querySelector('.popup__button-close_edit-form');
const profileEditButton = document.querySelector('.profile__edit-button');
const elementAddButtom = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_items-add');
const formAdd = document.querySelector('.popup__form_items-add');

const inputPlace = document.querySelector('.popup__input_place_name');
const inputUrl = document.querySelector('.popup__input_place_url');
const buttonCloseAdd = document.querySelector('.popup__button-close_items-add');

const popupImageView = document.querySelector('.popup_image-view');
const buttonCloseImageView = document.querySelector('.popup__button-close_image-view');

// две универсальные функции openPopup и closePopup


function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}


formEditProfile.addEventListener('submit', (event) => {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubTitle.textContent = inputDesciptoin.value;
  closePopup(popupProfile);
});

buttonCloseFormEditProfile.addEventListener('click', () => {
  closePopup(popupProfile);
});

profileEditButton.addEventListener('click', function () {
  inputName.value = profileTitle.textContent;
  inputDesciptoin.value = profileSubTitle.textContent;
  openPopup(popupProfile);
});


function createCard(item) {

  const cardsTemplate = document.querySelector('#cards-template');
  const cardsClone = cardsTemplate.content.querySelector('.elements__item').cloneNode(true);

  const cardsImage = cardsClone.querySelector('.elements__item-image');
  const cardsTitle = cardsClone.querySelector('.elements__item-title');

  cardsImage.src = item.link;
  cardsImage.alt = item.name;
  cardsTitle.textContent = item.name;


  const likeButton = cardsClone.querySelector('.elements__like-button');
  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('elements__like-button_active');
  })

  const buttonDeleteCard = cardsClone.querySelector('.elements__basket-button')
  buttonDeleteCard.classList.add('elements__basket-button')
  cardsClone.append(buttonDeleteCard)
  buttonDeleteCard.addEventListener('click', function () {
    cardsClone.remove()
  })

  cardsImage.addEventListener('click', function () {
    openPopup(popupImageView);
    document.querySelector('.popup__picture').src = item.link;
    document.querySelector('.popup__picture').alt = item.name;
    document.querySelector('.popup__image-caption').textContent = item.name;
  })

  return cardsClone
}


function renderCard(item) {
  const card = createCard(item);
  const cardsItem = document.querySelector('.elements__items');
  cardsItem.prepend(card);
}

// Всё про добавление карточки

elementAddButtom.addEventListener('click', function () {
  openPopup(popupAdd);
});

formAdd.addEventListener('submit', (event) => {
  event.preventDefault();
  // найти инпуты
  // вызвать функцию, которая добавит карточку
  // в неё сунуть значения из двух инпутов
  const item = {
    name: inputPlace.value,
    link: inputUrl.value,
  }
  const card = createCard(item)
  renderCard(item)
  // очистить поля
  formAdd.reset();
  // закрыть попап
  closePopup(popupAdd);
});

buttonCloseAdd.addEventListener('click', function () {
  closePopup(popupAdd);
});

initialCards.forEach(function (item) {
  const card = createCard(item)
  renderCard(item)
});


// Всплывающая картинка

buttonCloseImageView.addEventListener('click', function () {
  closePopup(popupImageView);
});