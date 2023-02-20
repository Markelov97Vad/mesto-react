import logo from './logo.svg';
import './index';

function App() {
  return (
    <div class="root">
    <header class="header root__header">
      <img class="header__logo" src="<%=require('./images/logo-mesto.svg')%>" alt="Логотип: Место"/>
    </header>

  <main class="content">
    <section class="profile content__profile">
      <div class="profile__card">
        <div class="profile__avatar">
          <img class="profile__avatar-img" src="<%=require('./images/jak-iv.png')%>" alt="аватарка"/>
          <button class="profile__avatar-button"></button>
        </div>
        <div class="profile__info">
          <h1 class="profile__title">Жак-Ив Кусто</h1>
          <button type="button" class="profile__edit-button" aria-label="edit profile"></button>
          <p class="profile__subtitle">Исследователь океана</p>
        </div>
      </div>
      <button type="button" class="profile__add-button" aria-label="edit card"></button>
    </section>

    <section class="elements content__elements">
    </section>
  </main>

  <footer class="footer root__footer">
    <p class="footer__copyright">&copy; 2022 Mesto Russia</p>
  </footer>

  <div class="popup popup_theme_edit">
    <div class="popup__container">
      <button type="button" aria-label="close the pop-up" class="popup__close-button"></button>
      <h3 class="popup__title">Редактировать профиль</h3>
      <form class="form popup__form" name="edit-form" novalidate>
        <fieldset class="form__input-container">
          <input class="form__input" type="text" name="username" id="name" placeholder="Имя"
            minlength="2" maxlength="40" required/>
          <span id="name-error" class="form__input-error">Вы пропустили это поле</span>
          <input class="form__input" type="text" name="info" id="job" placeholder="Вид деятельности"
            minlength="2" maxlength="200" required/>
          <span id="job-error" class="form__input-error">Вы пропустили это поле</span>
          <button type='submit' class='form__submit-button'>Сохранить</button>
        </fieldset>
      </form>
    </div>
  </div>

  <div class="popup popup_theme_new-card">
    <div class="popup__container">
      <button type="button" aria-label="close pop-up" id="newCard" class="popup__close-button"></button>
      <h3 class="popup__title">Новое место</h3>
      <form class="form popup__form" name="create-form" novalidate>
        <fieldset class="form__input-container">
          <input class="form__input" type="text" name="name" id="title" placeholder="Название"
            minlength="2" maxlength="30" required/>
          <span id="title-error" class="form__input-error">Вы пропустили это поле</span>
          <input class="form__input" type="url" name="link" id="url" placeholder="Ссылка на картинку"
            required/>
          <span id="url-error" class="form__input-error">Вы пропустили это поле</span>
          <button type='submit' id="create" class='form__submit-button'>Создать</button>
        </fieldset>
      </form>
    </div>
  </div>

  <div class="popup popup_theme_figure">
    <div class="popup__container-image">
      <button type="button" aria-label="close the pop-up" class="popup__close-button"></button>
      <figure class="popup__figure">
        <img class="popup__image" src="#" alt="#"/>
        <figcaption class="popup__figcap"></figcaption>
      </figure>
    </div>
  </div>

  <div class="popup popup_theme_delete-card">
    <div class="popup__container">
      <button type="button" aria-label="close pop-up" class="popup__close-button"></button>
      <h3 class="popup__title ">Вы уверены?</h3>
      <form class="form popup__form" name="delete-form" novalidate>
        <button type="submit" class='popup__button' aria-label="close pop-up">Да</button>
      </form>
    </div>
  </div>

  <div class="popup popup_theme_avatar">
    <div class="popup__container">
      <button type="button" aria-label="close pop-up" class="popup__close-button"></button>
      <h3 class="popup__title">Обновить аватар</h3>
      <form name="avatar-form" class="form popup__form" novalidate>
        <fieldset class="form__input-container">
          <input class="form__input" type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" required/>
          <span id="avatar-error" class="form__input-error"></span>
          <button type='submit' class='form__submit-button'>Сохранить</button>
        </fieldset>
      </form>
    </div>
  </div>

  <template id="cardTemplate">
    <article class="element">
      <button class="element__delete-button" type="button" aria-label="delete card"></button>
      <img src="#" alt="#" class="element__image"/>
      <div class="element__info">
        <h2 class="element__title"></h2>
        <span class="element__like">
          <button type="button" class="element__button" aria-label="mark like"></button>
          <span class="element__number-of-likes"></span>
        </span>
      </div>
    </article>
  </template>
</div>
  );
}

export default App;
