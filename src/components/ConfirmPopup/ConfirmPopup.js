import React from "react";
import PopupWithForm from "../PopupWithForm";
import SubmitButton from "../SubmitButton";
import { popupSettings, submitButtonSettings } from "./constants";

function ConfirmPopup({ onClose, isOpen, onCardDelete, card }) {
  // states
  const [submitButtonText, setSubmitButtonText] = React.useState(
    submitButtonSettings.defaultText
  );

  // handlers
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSubmitButtonText(submitButtonSettings.loadingText);
    onCardDelete(card).finally(() => {
      setSubmitButtonText(submitButtonSettings.defaultText);
    });
  };
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      {...popupSettings}
      submitButton={
        <SubmitButton {...submitButtonSettings} text={submitButtonText} />
      }
    />
  );
}

export default ConfirmPopup;
