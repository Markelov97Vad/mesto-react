import React from "react";

function ImagePopup ({card, onClose}) {
  return (
    <div className={`popup popup_theme_figure ${card._id ? 'popup_opened' : ''}`}>
    <div className="popup__container-image">
      <button type="button" aria-label="close the pop-up" className="popup__close-button" onClick={onClose}></button>
      <figure className="popup__figure">
        <img className="popup__image" src={card.link} alt={card.name}/>
        <figcaption className="popup__figcap">{card.name}</figcaption>
      </figure>
    </div>
  </div>
  )
}

export default ImagePopup