import { useEffect, useRef } from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
  
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      name="change-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
        <label className="popup__form-field">
          <input className="popup__input" type="url" id="avatar" name="avatar" placeholder="Ссылка на картинку" required ref={avatarRef} />
          <span className='popup__input-error avatar-error'></span>
        </label>
    </PopupWithForm>
  );
}
  
export default EditAvatarPopup;