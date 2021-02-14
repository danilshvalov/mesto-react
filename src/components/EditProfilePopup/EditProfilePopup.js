import React from "react";
import PopupWithForm from "../PopupWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Field from "../Field";
import SubmitButton from "../SubmitButton";
import {
  popupSettings,
  submitButtonSettings,
  nameInputSettings,
  descriptionInputSettings,
} from "./constants";

function EditProfilePopup({ onClose, isOpen, onUpdateUser }) {
  // contexts
  const currentUser = React.useContext(CurrentUserContext);

  // states
  const [nameInput, setNameInput] = React.useState({
    value: currentUser.name,
    isValid: false,
  });
  const [descriptionInput, setDescriptionInput] = React.useState({
    value: currentUser.value,
    isValid: false,
  });
  const [isValid, setValid] = React.useState(false);
  const [submitButtonText, setSubmitButtonText] = React.useState(
    submitButtonSettings.defaultText
  );

  React.useEffect(() => {
    const inputs = [nameInput, descriptionInput];
    setValid(inputs.every(({ isValid }) => isValid));
  }, [nameInput, descriptionInput]);

  // handlers
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      setSubmitButtonText(submitButtonSettings.loadingText);
      onUpdateUser({
        name: nameInput.value,
        about: descriptionInput.value,
      }).finally(() => {
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
      <fieldset className="fieldset form__edit-profile-fieldset">
        <div className="field fieldset__field">
          <Field
            {...nameInputSettings}
            onInput={setNameInput}
            isVisible={isOpen}
            defaultValue={currentUser.name}
          />
        </div>
        <div className="field fieldset__field">
          <Field
            {...descriptionInputSettings}
            onInput={setDescriptionInput}
            isVisible={isOpen}
            defaultValue={currentUser.about}
          />
        </div>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
