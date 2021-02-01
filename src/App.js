import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ImagePopup from "./components/ImagePopup";
import Main from "./components/Main";
import MessagePopup from "./components/MessagePopup";
import PopupWithForm from "./components/PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false);
  const [isMessagePopupOpen, setMessagePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();
  const [popupMessage, setPopupMessage] = React.useState();

  // MessagePopup используется для выведения ошибок пользователю

  const openMessagePopup = (message) => {
    setPopupMessage(message);
    setMessagePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setImagePopupOpen(true);
  };

  const closeMessagePopup = () => {
    setMessagePopupOpen(false);
  };

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setConfirmPopupOpen(false);
    setImagePopupOpen(false);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onMessage={openMessagePopup}
      />
      <Footer />

      {isEditProfilePopupOpen && (
        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          submitButtonText="Сохранить"
        >
          <fieldset className="fieldset form__edit-profile-fieldset">
            <div className="field fieldset__field">
              <input
                className="field__input"
                id="name-input"
                name="nameInput"
                type="text"
                defaultValue=""
                placeholder="Имя"
                required
                minLength="2"
                maxLength="40"
              />
              <span
                className="field__error-message"
                id="name-input-error"
              ></span>
            </div>
            <div className="field fieldset__field">
              <input
                className="field__input"
                id="job-input"
                name="jobInput"
                type="text"
                defaultValue=""
                placeholder="Деятельность"
                required
                minLength="2"
                maxLength="200"
              />
              <span
                className="field__error-message"
                id="job-input-error"
              ></span>
            </div>
          </fieldset>
        </PopupWithForm>
      )}

      {isAddPlacePopupOpen && (
        <PopupWithForm
          name="add-element"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          submitButtonText="Создать"
        >
          <fieldset className="fieldset form__add-element-fieldset">
            <div className="field fieldset__field">
              <input
                className="field__input"
                id="title-input"
                name="titleInput"
                type="text"
                defaultValue=""
                placeholder="Название"
                required
                minLength="1"
                maxLength="30"
              />
              <span
                className="field__error-message"
                id="title-input-error"
              ></span>
            </div>
            <div className="field fieldset__field">
              <input
                className="field__input"
                id="link-input"
                name="linkInput"
                type="url"
                defaultValue=""
                placeholder="Ссылка на картинку"
                required
              />
              <span
                className="field__error-message"
                id="link-input-error"
              ></span>
            </div>
          </fieldset>
        </PopupWithForm>
      )}
      {isEditAvatarPopupOpen && (
        <PopupWithForm
          name="change-avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          submitButtonText="Сохранить"
        >
          <fieldset className="fieldset form__change-avatar-fieldset">
            <div className="field fieldset__field">
              <input
                className="field__input"
                id="avatar-input"
                name="avatarInput"
                type="url"
                defaultValue=""
                placeholder="Ссылка на картинку"
                required
              />
              <span
                className="field__error-message"
                id="avatar-input-error"
              ></span>
            </div>
          </fieldset>
        </PopupWithForm>
      )}
      {isConfirmPopupOpen && (
        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
          submitButtonText="Да"
        ></PopupWithForm>
      )}
      {isImagePopupOpen && (
        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
      )}
      {isMessagePopupOpen && (
        <MessagePopup
          isOpen={isMessagePopupOpen}
          onClose={closeMessagePopup}
          message={popupMessage}
        />
      )}
    </div>
  );
}

export default App;
