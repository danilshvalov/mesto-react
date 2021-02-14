import React from "react";
import Field from "../Field";
import PopupWithForm from "../PopupWithForm";
import SubmitButton from "../SubmitButton";
import {
  popupSettings,
  submitButtonSettings,
  titleInputSettings,
  linkInputSettings,
} from "./constants";

function AddPlacePopup({ onClose, isOpen, onAddPlace }) {
  // states
  const [titleInput, setTitleInput] = React.useState({
    value: "",
    isValid: false,
  });
  const [linkInput, setLinkInput] = React.useState({
    value: "",
    isValid: false,
  });
  const [isValid, setValid] = React.useState(false);
  const [submitButtonText, setSubmitButtonText] = React.useState(
    submitButtonSettings.defaultText
  );

  // effects
  React.useEffect(() => {
    const inputs = [titleInput, linkInput];
    setValid(inputs.every(({ isValid }) => isValid));
  }, [titleInput, linkInput]);

  // handlers
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      setSubmitButtonText(submitButtonSettings.loadingText);
      onAddPlace({ name: titleInput.value, link: linkInput.value }).finally(
        () => {
          setSubmitButtonText(submitButtonSettings.defaultText);
        }
      );
    }
  };

  return (
    <PopupWithForm
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      {...popupSettings}
      submitButton={
        <SubmitButton
          {...submitButtonSettings}
          isEnabled={isValid}
          text={submitButtonText}
        />
      }
    >
      <fieldset className="fieldset form__add-element-fieldset">
        <div className="field fieldset__field">
          <Field
            {...titleInputSettings}
            onInput={setTitleInput}
            isVisible={isOpen}
          />
        </div>
        <div className="field fieldset__field">
          <Field
            {...linkInputSettings}
            onInput={setLinkInput}
            isVisible={isOpen}
          />
        </div>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
