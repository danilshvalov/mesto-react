import React from "react";
import getOnlyDOMProps from "../utils/utils";

function SubmitButton(props) {
  // проверка на undefined необходима для включения кнопки, если клиент не определил ее поведение
  return (
    <button
      {...getOnlyDOMProps(props)}
      className={`button button_type_submit ${props.className} ${
        props.isEnabled || props.isEnabled === undefined
          ? ""
          : "button_type_submit-disabled"
      }`}
      type="submit"
    >
      {props.text}
    </button>
  );
}

export default SubmitButton;
