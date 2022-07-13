import { useState, useEffect, useContext } from 'react';
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
  
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
          <label className="popup__form-field">
            <input className="popup__input" type="text" id="profileName" name="name" placeholder="Имя" required minLength="2" maxLength="40" onChange={handleChangeName} />
            <span className='popup__input-error profileName-error'></span>
          </label>
          <label className="popup__form-field">
            <input className="popup__input" type="text" id="profileInfo" name="about" placeholder="О себе" required minLength="2" maxLength="200" onChange={handleChangeDescription} />
            <span className='popup__input-error profileInfo-error'></span>
          </label>
    </PopupWithForm>
  );
}
  
export default EditProfilePopup;