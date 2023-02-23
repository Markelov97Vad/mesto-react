import React from "react";
import PopupWithForm from "./PopupWithForm";

function NewCardPopup ({isOpen, onClose}) {
  return (
    <PopupWithForm
      name='new-card'
      title='Новое место'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Создать'
    >
      <>
          <input className="form__input" type="text" name="name" id="title" placeholder="Название"
            minLength="2" maxLength="30" required/>
          <span id="title-error" className="form__input-error">Вы пропустили это поле</span>
          <input className="form__input" type="url" name="link" id="url" placeholder="Ссылка на картинку"
            required/>
          <span id="url-error" className="form__input-error">Вы пропустили это поле</span>
        </>
    </PopupWithForm>
  )
}

export default NewCardPopup