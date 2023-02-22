import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';
import EditProfilePopup from './EditProfilePopup';
import NewCardPopup from './NewCardPopup';
import CreateAvatarPopup from './CreateAvatarPopup';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen , setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({});

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
    setSelectedCard(false);
  }

  function handleCardClick (card) {
    setSelectedCard(card);
  }

  return (
    <div className='root'>
      < Header />
      < Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      < Footer />
      < EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
      < NewCardPopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
      < CreateAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
      < ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
