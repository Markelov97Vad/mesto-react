import React from "react";

function PopupWithForm (props) {
  return (
    <>
      <div className={`popup popup_theme_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
        <div className="popup__container">
          <button type="button" className="popup__close-button" onClick={props.onClose}></button>
          <h3 className="popup__title">{props.title}</h3>
          <form className="form popup__form" name={`${props.name}`}>
            {props.children}
          </form>
        </div>
      </div>
    </>
  )
}

export default PopupWithForm