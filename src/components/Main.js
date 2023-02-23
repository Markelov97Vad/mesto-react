import React, { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main ({onEditProfile, onAddPlace, onEditAvatar , onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getProfile(), api.getCards()])
    .then(([usetInfo, dataCards]) => {
      setUserName(usetInfo.name);
      setUserDescription(usetInfo.about);
      setUserAvatar(usetInfo.avatar);
      setCards(dataCards);
    })
    .catch( err => console.log(err))
  },[])

  return (
    <>
      <main className="content">
        <section className="profile content__profile">
          <div className="profile__card">
            <div className="profile__avatar">
              <img className="profile__avatar-img" src={userAvatar} alt="аватарка"/>
              <button className="profile__avatar-button" onClick={onEditAvatar}></button>
            </div>
            <div className="profile__info">
              <h1 className="profile__title">{userName}</h1>
              <button type="button" className="profile__edit-button" aria-label="edit profile"  onClick={onEditProfile}></button>
              <p className="profile__subtitle">{userDescription}</p>
            </div>
          </div>
          <button className="profile__add-button" aria-label="edit card" onClick={onAddPlace}></button>
        </section>

        <section className="elements content__elements">
          {cards.map((card) => (
            < Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default Main