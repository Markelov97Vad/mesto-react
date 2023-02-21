import React from "react";
import avatar from '../images/jak-iv.png';

function Main () {
  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__card">
          <div className="profile__avatar">
            <img className="profile__avatar-img" src={avatar} alt="аватарка"/>
            <button className="profile__avatar-button"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button type="button" className="profile__edit-button" aria-label="edit profile"></button>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" aria-label="edit card"></button>
      </section>

      <section className="elements content__elements">
      </section>
    </main>
  )
}

export default Main