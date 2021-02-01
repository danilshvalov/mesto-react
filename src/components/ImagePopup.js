function ImagePopup({name, link, isOpen, onClose}) {
  return (
    <div className={`popup popup_type_image ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          className="button button_type_close popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <div className="popup__picture picture">
          <img
            className="picture__image"
            src={link}
            alt={name}
          />
          <p className="picture__description">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;
