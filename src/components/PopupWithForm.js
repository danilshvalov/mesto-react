function PopupWithForm({name, title, submitButtonText, children, onClose, isOpen}) {
  return (
    <div
      className={`popup popup_type_${name} ${
        isOpen && "popup_opened"
      }`}
    >
      <div className="popup__container">
        <form
          className={`form popup__${name}-form`}
          method="POST"
          action="/"
          name={name}
          noValidate
        >
          <h2 className="form__title">{title}</h2>
          {children}
          <button
            className="button button_type_submit form__submit-button"
            type="submit"
          >
            {submitButtonText}
          </button>
        </form>
        <button
          className="button button_type_close popup__close-button"
          onClick={onClose}
          type="button"
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
