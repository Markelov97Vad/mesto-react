import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup ({isOpen, onClose, onAddPlace, onLoading}) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit (event) {
    event.preventDefault();
    onAddPlace({
      name,
      link 
    })
  }

  useEffect(() => {
    setName('');
    setLink('');
  },[isOpen])

  return (
    <PopupWithForm
      name='new-card'
      title='Новое место'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Создать'
      onSubmit={handleSubmit}
      onLoading={onLoading}
    >
      <>
          <input className="form__input" type="text" value={name} onChange={handleChangeName} name="name" id="title" placeholder="Название"
            minLength="2" maxLength="30" required/>
          <span id="title-error" className="form__input-error">Вы пропустили это поле</span>
          <input className="form__input" type="url" value={link}  onChange={handleChangeLink} name="link" id="url" placeholder="Ссылка на картинку"
            required/>
          <span id="url-error" className="form__input-error">Вы пропустили это поле</span>
        </>
    </PopupWithForm>
  )
}

export default AddPlacePopup