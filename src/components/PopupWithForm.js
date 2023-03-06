import React from "react";

function PopupWithForm (props) {
  return (
    <>
      <div className={`popup popup_theme_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
        <div className="popup__container">
          <button type="button" className="popup__close-button" onClick={props.onClose}></button>
          <h3 className="popup__title">{props.title}</h3>
          <form onSubmit={props.onSubmit} className="form popup__form" name={`${props.name}`}>
          <fieldset className="form__input-container">
            {props.children}
            <button type='submit' className='form__submit-button'>{props.buttonText}</button>
          </fieldset>
          </form>
        </div>
      </div>
    </>
  )
}

export default PopupWithForm