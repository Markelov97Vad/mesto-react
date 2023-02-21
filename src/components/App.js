// import logo from '../images/logo-mesto.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <body class="root">
      < Header />
      < Main />
      < Footer />

  <div className="popup popup_theme_edit">
    <div className="popup__container">
      <button type="button" aria-label="close the pop-up" className="popup__close-button"></button>
      <h3 className="popup__title">Редактировать профиль</h3>
      <form className="form popup__form" name="edit-form" novalidate>
        <fieldset className="form__input-container">
          <input className="form__input" type="text" name="username" id="name" placeholder="Имя"
            minlength="2" maxlength="40" required/>
          <span id="name-error" className="form__input-error">Вы пропустили это поле</span>
          <input className="form__input" type="text" name="info" id="job" placeholder="Вид деятельности"
            minlength="2" maxlength="200" required/>
          <span id="job-error" className="form__input-error">Вы пропустили это поле</span>
          <button type='submit' className='form__submit-button'>Сохранить</button>
        </fieldset>
      </form>
    </div>
  </div>

  <div className="popup popup_theme_new-card">
    <div className="popup__container">
      <button type="button" aria-label="close pop-up" id="newCard" className="popup__close-button"></button>
      <h3 className="popup__title">Новое место</h3>
      <form className="form popup__form" name="create-form" novalidate>
        <fieldset className="form__input-container">
          <input className="form__input" type="text" name="name" id="title" placeholder="Название"
            minlength="2" maxlength="30" required/>
          <span id="title-error" className="form__input-error">Вы пропустили это поле</span>
          <input className="form__input" type="url" name="link" id="url" placeholder="Ссылка на картинку"
            required/>
          <span id="url-error" className="form__input-error">Вы пропустили это поле</span>
          <button type='submit' id="create" className='form__submit-button'>Создать</button>
        </fieldset>
      </form>
    </div>
  </div>

  <div className="popup popup_theme_figure">
    <div className="popup__container-image">
      <button type="button" aria-label="close the pop-up" className="popup__close-button"></button>
      <figure className="popup__figure">
        <img className="popup__image" src="#" alt="#"/>
        <figcaption className="popup__figcap"></figcaption>
      </figure>
    </div>
  </div>

  <div className="popup popup_theme_delete-card">
    <div className="popup__container">
      <button type="button" aria-label="close pop-up" className="popup__close-button"></button>
      <h3 className="popup__title ">Вы уверены?</h3>
      <form className="form popup__form" name="delete-form" novalidate>
        <button type="submit" className='popup__button' aria-label="close pop-up">Да</button>
      </form>
    </div>
  </div>

  <div className="popup popup_theme_avatar">
    <div className="popup__container">
      <button type="button" aria-label="close pop-up" className="popup__close-button"></button>
      <h3 className="popup__title">Обновить аватар</h3>
      <form name="avatar-form" className="form popup__form" novalidate>
        <fieldset className="form__input-container">
          <input className="form__input" type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" required/>
          <span id="avatar-error" className="form__input-error"></span>
          <button type='submit' className='form__submit-button'>Сохранить</button>
        </fieldset>
      </form>
    </div>
  </div>

  <template id="cardTemplate">
    <article className="element">
      <button className="element__delete-button" type="button" aria-label="delete card"></button>
      <img src="#" alt="#" className="element__image"/>
      <div className="element__info">
        <h2 className="element__title"></h2>
        <span className="element__like">
          <button type="button" className="element__button" aria-label="mark like"></button>
          <span className="element__number-of-likes"></span>
        </span>
      </div>
    </article>
  </template>
</body>
  );
}

export default App;
