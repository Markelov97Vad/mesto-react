import React, { useRef} from "react";
import PopupWithForm from "./PopupWithForm";

function CreateAvatarPopup ({isOpen, onClose, onUpdateAvatar, onLoading}) {

  const avatarRef = useRef();
  
  function handleSubmit (event) {
    event.preventDefault();
    
    onUpdateAvatar({
      avatar: avatarRef.current.value
    })
  }

  return (
    <PopupWithForm
      name='avatar'
      title='Обновить аватар'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Сохранить'
      onSubmit={handleSubmit}
      onLoading={onLoading}
    >
      <>
          <input className="form__input" ref={avatarRef} type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" required/>
          <span id="avatar-error" className="form__input-error"></span>
      </>
    </PopupWithForm>
  ) 
}

export default CreateAvatarPopup