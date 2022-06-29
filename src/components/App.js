import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import './App.css';

function App() {
  const [isEditProfilePopupOpen,  setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen,  setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen,  setEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />

        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          children={
            <>
              <label className="popup__form-field">
                <input className="popup__input" type="text" id="profileName" name="name" placeholder="Имя" required minLength="2" maxLength="40" />
                <span className='popup__input-error profileName-error'></span>
              </label>
              <label className="popup__form-field">
                <input className="popup__input" type="text" id="profileInfo" name="about" placeholder="О себе" required minLength="2" maxLength="200" />
                <span className='popup__input-error profileInfo-error'></span>
              </label>
            </>
          } 
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups} />

        <PopupWithForm
          name="add"
          title="Новое место"
          children={
            <>
              <label className="popup__form-field">
                <input className="popup__input" type="text" id="name" name="name" placeholder="Название" required minLength="2" maxLength="30" />
                <span className='popup__input-error name-error'></span>
              </label>
              <label className="popup__form-field">
                <input className="popup__input" type="url" id="link" name="link" placeholder="Ссылка на картинку" required />
                <span className='popup__input-error link-error'></span>
              </label>
            </>
          }
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups} />

        <PopupWithForm
          name="change-avatar"
          title="Обновить аватар"
          children={
            <>
              <label className="popup__form-field">
                <input className="popup__input" type="url" id="avatar" name="avatar" placeholder="Ссылка на картинку" required />
                <span className='popup__input-error avatar-error'></span>
              </label>
            </>
          }
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups} />

        <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да" />

        <ImagePopup />

        <template className="element-template">
          <li className="element">
            <img className="element__image" src="#" alt="" />
            <button className="element__delete-button" type="button" aria-label="Удалить"></button>
            <div className="element__image-title-container">
              <h2 className="element__title"></h2>
              <div className="element__like-container">
                <button className="element__like-button" type="button" aria-label="Нравится"></button>
                <p className="element__like-counter"></p>
              </div>
            </div>
          </li>
        </template>
      </div>
    </div>
  );
}

export default App;
