import React from "react";
import avatar from '../images/jak-iv.png';

function Main ({onEditProfile, onAddPlace, onEditAvatar}) {
  
  return (
    <>
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__card">
          <div className="profile__avatar">
            <img className="profile__avatar-img" src={avatar} alt="аватарка"/>
            <button className="profile__avatar-button" onClick={onEditAvatar}></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button type="button" className="profile__edit-button" aria-label="edit profile"  onClick={onEditProfile}></button>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__add-button" aria-label="edit card" onClick={onAddPlace}></button>
      </section>

      <section className="elements content__elements">
      </section>
    </main>

{/* <div className="popup popup_theme_edit">
<div className="popup__container">
  <button type="button" aria-label="close the pop-up" className="popup__close-button"></button>
  <h3 className="popup__title">Редактировать профиль</h3>
  <form className="form popup__form" name="edit-form" noValidate>
    <fieldset className="form__input-container">
      <input className="form__input" type="text" name="username" id="name" placeholder="Имя"
        minLength="2" maxLength="40" required/>
      <span id="name-error" className="form__input-error">Вы пропустили это поле</span>
      <input className="form__input" type="text" name="info" id="job" placeholder="Вид деятельности"
        minLength="2" maxLength="200" required/>
      <span id="job-error" className="form__input-error">Вы пропустили это поле</span>
      <button type='submit' className='form__submit-button'>Сохранить</button>
    </fieldset>
  </form>
</div>
</div>

<div className="popup popup_theme_new-card">
<div className="popup__container">
  <button type="button" aria-label="close pop-up" id="newCard" className="popup__close-button"></button>
  <h3 className="popup__title">Новое место</h3>
  <form className="form popup__form" name="create-form" noValidate>
    <fieldset className="form__input-container">
      <input className="form__input" type="text" name="name" id="title" placeholder="Название"
        minLength="2" maxLength="30" required/>
      <span id="title-error" className="form__input-error">Вы пропустили это поле</span>
      <input className="form__input" type="url" name="link" id="url" placeholder="Ссылка на картинку"
        required/>
      <span id="url-error" className="form__input-error">Вы пропустили это поле</span>
      <button type='submit' id="create" className='form__submit-button'>Создать</button>
    </fieldset>
  </form>
</div>
</div>

<div className="popup popup_theme_figure">
<div className="popup__container-image">
  <button type="button" aria-label="close the pop-up" className="popup__close-button"></button>
  <figure className="popup__figure">
    <img className="popup__image" src="#" alt="#"/>
    <figcaption className="popup__figcap"></figcaption>
  </figure>
</div>
</div>

<div className="popup popup_theme_delete-card">
  <div className="popup__container">
    <button type="button" aria-label="close pop-up" className="popup__close-button"></button>
    <h3 className="popup__title ">Вы уверены?</h3>
    <form className="form popup__form" name="delete-form" noValidate>
      <button type="submit" className='popup__button' aria-label="close pop-up">Да</button>
    </form>
  </div>
</div>

<div className="popup popup_theme_avatar">
  <div className="popup__container">
    <button type="button" aria-label="close pop-up" className="popup__close-button"></button>
    <h3 className="popup__title">Обновить аватар</h3>
    <form name="avatar-form" className="form popup__form" noValidate>
      <fieldset className="form__input-container">
        <input className="form__input" type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" required/>
        <span id="avatar-error" className="form__input-error"></span>
        <button type='submit' className='form__submit-button'>Сохранить</button>
      </fieldset>
    </form>
  </div>
</div> */}
</>
  )
}

export default Main