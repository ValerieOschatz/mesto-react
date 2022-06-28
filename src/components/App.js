import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />

        <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить">
          <label className="popup__form-field">
            <input className="popup__input" type="text" id="profileName" name="name" placeholder="Имя" required minlength="2" maxlength="40" />
            <span className='popup__input-error profileName-error'></span>
          </label>
          <label className="popup__form-field">
            <input className="popup__input" type="text" id="profileInfo" name="about" placeholder="О себе" required minlength="2" maxlength="200" />
            <span className='popup__input-error profileInfo-error'></span>
          </label>
        </PopupWithForm>

        <PopupWithForm name="add" title="Новое место" buttonText="Создать">
          <label className="popup__form-field">
            <input className="popup__input" type="text" id="name" name="name" placeholder="Название" required minlength="2" maxlength="30" />
            <span className='popup__input-error name-error'></span>
          </label>
          <label className="popup__form-field">
            <input className="popup__input" type="url" id="link" name="link" placeholder="Ссылка на картинку" required />
            <span className='popup__input-error link-error'></span>
          </label>
        </PopupWithForm>

        <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да" />

        <PopupWithForm name="change-avatar" title="Обновить аватар" buttonText="Сохранить">
          <label className="popup__form-field">
            <input className="popup__input" type="url" id="avatar" name="avatar" placeholder="Ссылка на картинку" required />
            <span className='popup__input-error avatar-error'></span>
          </label>
        </PopupWithForm>

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
