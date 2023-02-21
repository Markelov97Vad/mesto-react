// import logo from '../images/logo-mesto.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';
import EditProfilePopup from './EditProfilePopup';
import NewCardPopup from './NewCardPopup';
import CreateAvatarPopup from './CreateAvatarPopup';

function App() {
  const [isEditProfilePopupOpen , setIsEditProfilePopupOpen] = useState();

  return (
    <div className='root'>
      < Header />
      < Main 
        // onEditProfile={handleEditProfileClick}
        // onAddPlace={handleAddPlaceClick}
        // onEditAvatar={handleEditAvatarClick}
      />
      < Footer />
      < EditProfilePopup />
      < NewCardPopup />
      < CreateAvatarPopup />
    </div>
  );
}

export default App;
