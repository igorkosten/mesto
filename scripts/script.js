const form = document.querySelector('.form')
const InputName = document.querySelector('.input__name')
const ProfileTitle = document.querySelector('.profile__title')
const FormButtonClose = document.querySelector('.form__button_close')
const ProfileEditButton = document.querySelector('.profile__edit-button')
const Popup = document.querySelector('.popup')



form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(InputName.value)
  ProfileTitle.innerHTML=(InputName.value)
})

FormButtonClose.onClick=function(){
  Popup.classList.remove('active')
}

ProfileEditButton.onClick=function(){
  Popup.classList.add('active')
}