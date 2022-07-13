import useClose from "../utils/useClose";

function PopupWithForm({ isOpen, name, title, children, buttonText, onClose, onSubmit }) {
  useClose(isOpen, onClose);

  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <form className="popup__form" name={name} noValidate onSubmit={onSubmit}>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button className="popup__submit-button" type="submit">{buttonText}</button>
        </form>
        <button className="popup__close-button" type="button" aria-label="Закрыть окно настроек" onClick={onClose}></button>
      </div>
    </div>
  );
}
  
export default PopupWithForm;