function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          className="button button_type_close popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
        <div className="popup__picture picture">
          <img
            className="picture__image"
            src={props.isOpen && props.card.link}
            alt={props.isOpen && props.card.name}
          />
          <p className="picture__description">
            {props.isOpen && props.card.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;
