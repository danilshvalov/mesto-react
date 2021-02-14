import React from "react";
import Popup from "./Popup";

function PopupWithForm({
  name,
  title,
  children,
  onClose,
  isOpen,
  onSubmit,
  submitButton,
}) {
  return (
    <Popup name={name} isOpen={isOpen} onClose={onClose}>
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
    </Popup>
  );
}

export default PopupWithForm;
