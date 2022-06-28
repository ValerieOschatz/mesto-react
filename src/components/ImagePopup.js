import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_type_full-image">
      <div className="popup__container popup__container_image">
        <figure className="popup__figure">
          <img className="popup__image" src="#" alt="" />
          <figcaption className="popup__image-title"></figcaption>
        </figure>
        <button className="popup__close-button" type="button" aria-label="Закрыть окно настроек"></button>
      </div>
    </div>
  );
}
  
export default ImagePopup;