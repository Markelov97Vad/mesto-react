import React from "react";

function PopupWithForm (props) {
  return (
    <>
      <div className={`popup popup_theme_${props.name}`}>
        <div className="popup__container">
          <button type="button" className="popup__close-button"></button>
          <h3 className="popup__title">{props.title}</h3>
          <form className="form popup__form" name={`${props.name}`}>
            {props.children}
          </form>
        </div>
      </div>

      {/* <div className={`popup popup_theme_${props.name}`}>
        <div className="popup__container">
          <button type="button" aria-label="close pop-up" id="newCard" className="popup__close-button"></button>
          <h3 className="popup__title">{props.title}</h3>
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

      <div className={`popup popup_theme_${props.name}`}>
        <div className="popup__container">
          <button type="button" aria-label="close pop-up" className="popup__close-button"></button>
          <h3 className="popup__title ">{props.title}</h3>
          <form className="form popup__form" name="delete-form" noValidate>
            <button type="submit" className='popup__button' aria-label="close pop-up">Да</button>
          </form>
        </div>
      </div>

      <div className={`popup popup_theme_${props.name}`}>
        <div className="popup__container">
          <button type="button" aria-label="close pop-up" className="popup__close-button"></button>
          <h3 className="popup__title">{props.title}</h3>
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

export default PopupWithForm