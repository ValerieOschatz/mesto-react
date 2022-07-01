import React from 'react';

function ImagePopup(props) {
  React.useEffect(() => {
    if (props.card) {
      document.addEventListener('mousedown', props.onOverlayClick);
      document.addEventListener('keydown', props.onEscClose);

      return () => {
        document.removeEventListener('mousedown', props.onOverlayClick);
        document.removeEventListener('keydown', props.onEscClose);
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