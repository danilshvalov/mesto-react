import React from "react";
import getOnlyDOMProps from "../utils/utils";

const Field = (props) => {
  // states
  const [isValid, setValid] = React.useState(false);
  const [value, setValue] = React.useState(props.defaultValue);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isErrorVisible, setErrorVisible] = React.useState(false);

  // refs
  const inputRef = React.useRef();

  // effects
  React.useEffect(() => {
    if (props.isVisible) {
      inputRef.current.value = props.defaultValue;
      setValue(inputRef.current.value);
      setValid(inputRef.current.validity.valid);
      setErrorMessage(inputRef.current.validationMessage);
      setErrorVisible(false);
    }
  }, [props.isVisible]);
  React.useEffect(() => {
    props.onInput({ value, isValid });
  }, [value, isValid]);

  // handlers
  const handleInput = (evt) => {
    const target = evt.target;
    setValue(target.value);
    setValid(target.validity.valid);
    setErrorVisible(!target.validity.valid);
    setErrorMessage(target.validationMessage);
  };

  return (
    <div className="field fieldset__field">
      <input
        {...getOnlyDOMProps(props)}
        className={`field__input ${isErrorVisible ? "field__input_error" : ""}`}
        id={`${props.name}-input`}
        name={`${props.name}Input`}
        onInput={handleInput}
        defaultValue={value}
        ref={inputRef}
      />
      <span
        className={`field__error-message ${
          isErrorVisible ? "field__error-message_visible" : ""
        }`}
        id={`${props.name}-input-error`}
      >
        {errorMessage}
      </span>
    </div>
  );
};

export default Field;
