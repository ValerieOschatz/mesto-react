import { useState, useEffect } from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [place, setPlace] = useState('');
  const [link, setLink] = useState('');

  function handleChangePlace(evt) {
    setPlace(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  
    onAddPlace({
      name: place,
      link
    });
  }

  useEffect(() => {
    setPlace('');
    setLink('');
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonText={isLoading ? "Создание..." : "Создать"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
        <label className="popup__form-field">
          <input className="popup__input" type="text" id="name" name="name" placeholder="Название" required minLength="2" maxLength="30" onChange={handleChangePlace} value={place} />
          <span className='popup__input-error name-error'></span>
        </label>
        <label className="popup__form-field">
          <input className="popup__input" type="url" id="link" name="link" placeholder="Ссылка на картинку" required onChange={handleChangeLink} value={link} />
          <span className='popup__input-error link-error'></span>
        </label>
    </PopupWithForm>
  );
}
  
export default AddPlacePopup;