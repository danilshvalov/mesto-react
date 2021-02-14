import React from "react";
import Field from "../Field";
import PopupWithForm from "../PopupWithForm";
import SubmitButton from "../SubmitButton";
import {
  popupSettings,
  submitButtonSettings,
  avatarInputSettings,
} from "./constants";

function EditAvatarPopup({ onClose, isOpen, onUpdateAvatar }) {
  // ref используется внутри Field
  // states
  const [avatarInput, setAvatarInput] = React.useState({
    value: "",
    isValid: false,
  });
  const [isValid, setValid] = React.useState(false);
  const [submitButtonText, setSubmitButtonText] = React.useState(
    submitButtonSettings.defaultText
  );

  // effects
  React.useEffect(() => {
    setValid(avatarInput.isValid);
  }, [avatarInput]);

  // handlers
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      setSubmitButtonText(submitButtonSettings.loadingText);
      onUpdateAvatar({ avatar: avatarInput.value }).finally(() => {
        setSubmitButtonText(submitButtonSettings.defaultText);
      });
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
      <fieldset className="fieldset form__change-avatar-fieldset">
        <div className="field fieldset__field">
          <Field
            {...avatarInputSettings}
            onInput={setAvatarInput}
            isVisible={isOpen}
          />
        </div>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
