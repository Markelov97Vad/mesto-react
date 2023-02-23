import React from "react";
import PopupWithForm from "./PopupWithForm";

function CreateAvatarPopup ({isOpen, onClose}) {
  return (
    <PopupWithForm
      name='avatar'
      title='Обновить аватар'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Сохранить'
    >
      <>
          <input className="form__input" type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" required/>
          <span id="avatar-error" className="form__input-error"></span>
      </>
    </PopupWithForm>
  ) 
}

export default CreateAvatarPopup