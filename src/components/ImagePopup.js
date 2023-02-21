import React from "react";

function ImagePopup () {
  return (
    <div className="popup popup_theme_figure">
    <div className="popup__container-image">
      <button type="button" aria-label="close the pop-up" className="popup__close-button"></button>
      <figure className="popup__figure">
        <img className="popup__image" src="#" alt="#"/>
        <figcaption className="popup__figcap"></figcaption>
      </figure>
    </div>
  </div>
  )
}

export default ImagePopup