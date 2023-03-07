import React from "react";

function PopupWithConfirmation ({isOpen, card, onSubmit, onClose, onLoading}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(card)
  }

  return (
    <div className={`popup popup_theme_delete-card ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button type="button" aria-label="close pop-up" className="popup__close-button" onClick={onClose}></button>
        <h3 className="popup__title ">Вы уверены?</h3>
        <form onSubmit={handleSubmit} className="form popup__form" name="delete-form">
          <button type="submit" className='popup__button' aria-label="close pop-up">{onLoading ? 'Сохранение..' : "Да"}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithConfirmation