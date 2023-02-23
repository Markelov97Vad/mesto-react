import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup ({isOpen, onClose}) {
  return (
    <PopupWithForm 
      name='edit'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Сохранить'
      >
        <>
          <input className="form__input" type="text" name="username" id="name" placeholder="Имя"
            minLength="2" maxLength="40" required/>
          <span id="name-error" className="form__input-error">Вы пропустили это поле</span>
          <input className="form__input" type="text" name="info" id="job" placeholder="Вид деятельности"
            minLength="2" maxLength="200" required/>
          <span id="job-error" className="form__input-error">Вы пропустили это поле</span>
        </>
      </PopupWithForm>
  )
}

export default EditProfilePopup