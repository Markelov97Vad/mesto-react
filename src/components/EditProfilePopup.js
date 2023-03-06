import React, { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup ({onUpdateUser, isOpen, onClose}) {
  const currentUser = useContext(CurrentUserContext)

  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('')

  function handleChangeName (e) {
    setName(e.target.value)
  }
  function handleChangeAbout (e) {
    setDescription(e.target.value)
  }

  function handleSubmit (event) {
    console.log(name);
    console.log(description);
    event.preventDefault();
    onUpdateUser({
      name,
      about: description
    })
  }

  useEffect(() => {
    setName(currentUser.name);
    console.log(currentUser.name);
    setDescription(currentUser.about)
  }, [currentUser])

  return (
    <PopupWithForm 
      name='edit'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Сохранить'
      onSubmit={handleSubmit}
      >
        <>
          <input className="form__input" type="text" name="username" value={name} onChange={handleChangeName} id="name" placeholder="Имя"
            minLength="2" maxLength="40" required/>
          <span id="name-error" className="form__input-error">Вы пропустили это поле</span>
          <input className="form__input" type="text" name="info" value={description} onChange={handleChangeAbout} id="job" placeholder="Вид деятельности"
            minLength="2" maxLength="200" required/>
          <span id="job-error" className="form__input-error">Вы пропустили это поле</span>
        </>
      </PopupWithForm>
  )
}

export default EditProfilePopup