import React from "react";

function PopupWithForm({
  name,
  title,
  children,
  onClose,
  isOpen,
  onSubmit,
  submitButton,
}) {
  // constants
  const escapeKeyCode = "Escape";

  // refs
  const popupWrapperRef = React.useRef();
  const popupContainerRef = React.useRef();
  const closeButtonRef = React.useRef();

  // handlers
  const escapeButtonHandler = (evt) => {
    if (evt.key === escapeKeyCode) {
      onClose();
      document.removeEventListener("keydown", escapeButtonHandler);
    }
  };
  const handleClose = (evt) => {
    if (
      evt.target === popupWrapperRef.current ||
      evt.target === closeButtonRef.current ||
      evt.target === popupContainerRef.current
    ) {
      onClose();
    }
  };

  // effects
  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", escapeButtonHandler);
    }
  }, [isOpen]);
  return (
    <div
      className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}
      ref={popupWrapperRef}
      onClick={handleClose}
    >
      <div className="popup__container" ref={popupContainerRef}>
        <form
          className={`form popup__${name}-form`}
          method="POST"
          action="/"
          name={name}
          noValidate
          onSubmit={onSubmit}
        >
          <h2 className="form__title">{title}</h2>
          {children}
          {submitButton}
        </form>
        <button
          className="button button_type_close popup__close-button"
          type="button"
          ref={closeButtonRef}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
