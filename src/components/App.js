import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import CreateAvatarPopup from './CreateAvatarPopup';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen , setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState('');
  const [cards, setCards] = useState([]);

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

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false)
    setSelectedCard({});
  }

  function handleCardClick (card) {
    setSelectedCard(card);
  }

  function handleCardLike (card) {
    const isLiked = card.likes.some( el => el._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked)
    //      
      .then( newCard => {
        setCards( state => {
          return state.map( c => { 
            return c._id === card._id ? newCard : c
          })
        });
      })
      .catch( err => console.log(err))
   }

  function handleCardDelete (id) {
    api.deleteCard(id)
      .then(() => {
      //       добавляет в стейт массив карточек без той, которую удалил
      setCards( cards => cards.filter( card => {
        return card._id !== id
      }))
      })
      .catch( err => console.log(err))
   }

  function  handleUpdateUser (userData) {
    api.setUserInfo(userData)
      .then((data) => {
        setCurrentUser(data);
      })
  }

  function handleUpdateAvatar (userData) {
    api.setUserAvatar(userData)
      .then((data) => {
        setCurrentUser(data);
      })
  }

  function handleAddPlaceSubmit (dataCards) {
      api.addCard(dataCards)
        .then((newCard) => {
          setCards([newCard, ...cards]);

        })
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
          onCardDelete={handleCardDelete}
        />
        < Footer />
        < EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
        < AddPlacePopup onAddPlace={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
        < CreateAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
        < ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
