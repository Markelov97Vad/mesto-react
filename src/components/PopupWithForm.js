import React from "react";

function PopupWithForm (props) {

  const {name, isOpen, onClose, onSubmit, buttonText, children, title, onLoading} = props

  return (
    <>
      <div className={`popup popup_theme_${name} ${isOpen ? "popup_opened" : ""}`}>
        <div className="popup__container">
          <button type="button" className="popup__close-button" onClick={onClose}></button>
          <h3 className="popup__title">{title}</h3>
          <form onSubmit={onSubmit} className="form popup__form" name={`${name}`}>
          <fieldset className="form__input-container">
            {children}
            <button type='submit' className='form__submit-button'>{onLoading ? 'Сохранение..' : buttonText}</button>
          </fieldset>
          </form>
        </div>
      </div>
    </>
  )
}

export default PopupWithForm