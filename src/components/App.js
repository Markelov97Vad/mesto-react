// import logo from '../images/logo-mesto.svg';
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

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  return (
    <div className='root'>
      < Header />
      < Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      < Footer />
      < EditProfilePopup isOpen={isEditProfilePopupOpen}/>
      < NewCardPopup isOpen={isAddPlacePopupOpen}/>
      < CreateAvatarPopup isOpen={isEditAvatarPopupOpen}/>
      < ImagePopup />
    </div>
  );
}

export default App;
