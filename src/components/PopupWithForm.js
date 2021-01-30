function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen && "popup_opened"
      }`}
    >
      <div className="popup__container">
        <form
          className={`form popup__${props.name}-form`}
          method="POST"
          action="/"
          name={props.name}
          noValidate
        >
          <h2 className="form__title">{props.title}</h2>
          {props.children}
          <button
            className="button button_type_submit form__submit-button"
            type="submit"
          >
            {props.submitButtonText}
          </button>
        </form>
        <button
          className="button button_type_close popup__close-button"
          onClick={props.onClose}
          type="button"
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
