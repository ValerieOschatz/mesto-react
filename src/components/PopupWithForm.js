import React from 'react';

function PopupWithForm(props) {
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

    if (props.isOpen) {
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
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <form className="popup__form" name={props.name} noValidate>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="popup__submit-button" type="submit">{props.buttonText}</button>
        </form>
        <button className="popup__close-button" type="button" aria-label="Закрыть окно настроек" onClick={props.onClose}></button>
      </div>
    </div>
  );
}
  
export default PopupWithForm;