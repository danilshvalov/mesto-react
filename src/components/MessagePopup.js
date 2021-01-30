function MessagePopup(props) {
  return (
    <div className={`popup popup_type_message ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <div className="popup__message-box message-box">
          <span className="message-box__text">{props.message}</span>
        </div>
        <button
          className="popup__close-button popup__close-button_indent button button_type_close button_small-size button_inverted-color"
          type="button"
          onClick={props.onClick}
        ></button>
      </div>
    </div>
  );
}

export default MessagePopup;
