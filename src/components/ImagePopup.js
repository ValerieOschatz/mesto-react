import React from 'react';

function ImagePopup(props) {
  React.useEffect(() => {
    function handleOverlayClick(evt) {
      if (evt.target.classList.contains('popup_opened')) {
        props.onClose();
      }
    }

    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        props.onClose();
      }
    }

    if (props.card) {
      document.addEventListener('mousedown', handleOverlayClick);
      document.addEventListener('keydown', handleEscClose);
      console.log('open');

      return () => {
        document.removeEventListener('mousedown', handleOverlayClick);
        document.removeEventListener('keydown', handleEscClose);
        console.log('close');
      }
    }
  });

  return (
    <div className={`popup popup_type_full-image ${props.card && "popup_opened"}`}>
      <div className="popup__container popup__container_image">
        <figure className="popup__figure">
          <img className="popup__image" src={props.card && props.card.link} alt={props.card && props.card.name} />
          <figcaption className="popup__image-title">{props.card && props.card.name}</figcaption>
        </figure>
        <button className="popup__close-button" type="button" aria-label="Закрыть окно настроек" onClick={props.onClose}></button>
      </div>
    </div>
  );
}
  
export default ImagePopup;