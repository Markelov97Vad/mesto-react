import { useEffect, useState } from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import CreateAvatarPopup from './CreateAvatarPopup';
import ImagePopup from './ImagePopup';
import PopupWithConfirmation from './PopupWithConfirmation';
import api from '../utils/Api';

function App() {
  const [isEditProfilePopupOpen , setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isPopupWithConfirmation, setIsPopupWithConfirmation] = useState(false);
  const [removeCardId ,setRemoveCardId] = useState('')
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState('');
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(( [userInfo, dataCards] )=> {
        setCurrentUser(userInfo);
        setCards(dataCards);
      })
      .catch( err => console.log(err))
  }, [])

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handlePopupWithConfirmationClick(cardId) {
    setIsPopupWithConfirmation(!isPopupWithConfirmation);
    setRemoveCardId(cardId);
  }

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false)
    setSelectedCard({});
    setIsPopupWithConfirmation(false)
  }

  function handleCardClick (card) {
    setSelectedCard(card);
    console.log(card);
  }

  function handleCardLike (card) {
    const isLiked = card.likes.some( el => el._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked)     
      .then( newCardWithLike => {
        console.log(newCardWithLike)
        setCards( state => {
          console.log(state)
          return state.map( c => {
            console.log(c);
            console.log(newCardWithLike);
            return c._id === card._id ? newCardWithLike : c
          })
        });
      })
      .catch( err => console.log(err))
   }

  function handleCardDelete (id) {
    setIsLoading(true);
    api.deleteCard(id)
      .then(() => {
        setCards( cards => cards.filter( card => {
          return card._id !== id
      }))
        closeAllPopups();
      })
      .catch( err => console.log(err))
      .finally(() => setIsLoading(false))
   }

  function  handleUpdateUser (userData) {
    setIsLoading(true);
    api.setUserInfo(userData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }

  function handleUpdateAvatar (userData) {
    setIsLoading(true);
    api.setUserAvatar(userData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }

  function handleAddPlaceSubmit (dataCards) {
    setIsLoading(true);
    api.addCard(dataCards)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='root'>
        < Header />
        < Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handlePopupWithConfirmationClick}
        />
        < Footer />
        < EditProfilePopup onLoading={isLoading} onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
        < AddPlacePopup onLoading={isLoading} onAddPlace={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
        < CreateAvatarPopup onLoading={isLoading} onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
        < ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        < PopupWithConfirmation onLoading={isLoading} card={removeCardId} isOpen={isPopupWithConfirmation} onSubmit={handleCardDelete} onClose={closeAllPopups}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
