import React, { useEffect, useState } from "react";
import avatar from '../images/jak-iv.png';
import api from "../utils/Api";

function Main ({onEditProfile, onAddPlace, onEditAvatar}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  useEffect(() => {
    Promise.all([api.getProfile()]).then(([usetInfo]) => {
      setUserName(usetInfo.name);
      setUserDescription(usetInfo.about);
      setUserAvatar(usetInfo.avatar)
    }).catch( err => console.log(err))
  })

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
        </section>
      </main>
    </>
  )
}

export default Main