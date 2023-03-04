import React, { useContext } from "react";

import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main ({onEditProfile, onAddPlace, onEditAvatar , onCardClick, cards, onCardLike}) {
  // const [userName, setUserName] = useState('');
  // const [userDescription, setUserDescription] = useState('');
  // const [userAvatar, setUserAvatar] = useState('');
  // const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  // useEffect(() => {
  //   Promise.resolve( api.getCards())
  //   .then(( dataCards ) => {
  //     setCards(dataCards);
  //   })
  //   .catch( err => console.log(err))
  // },[])

  return (
    <>
      <main className="content">
        <section className="profile content__profile">
          <div className="profile__card">
            <div className="profile__avatar">
              <img className="profile__avatar-img" src={currentUser.avatar} alt="аватарка"/>
              <button className="profile__avatar-button" onClick={onEditAvatar}></button>
            </div>
            <div className="profile__info">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button type="button" className="profile__edit-button" aria-label="edit profile"  onClick={onEditProfile}></button>
              <p className="profile__subtitle">{currentUser.about}</p>
            </div>
          </div>
          <button className="profile__add-button" aria-label="edit card" onClick={onAddPlace}></button>
        </section>

        <section className="elements content__elements">
          {cards.map((card) => {
            return (
              < Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
              />
          )})}
        </section>
      </main>
    </>
  )
}

export default Main