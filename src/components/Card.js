import React from "react";

function Card ({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="element">
      <button className="element__delete-button" type="button" aria-label="delete card"></button>
      <img src={card.link} alt={card.name} className="element__image" onClick={handleClick}/>
      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
        <span className="element__like">
          <button type="button" className="element__button" aria-label="mark like"></button>
          <span className="element__number-of-likes">{card.likes.length}</span>
        </span>
      </div>
    </article>
  )
}

export default Card