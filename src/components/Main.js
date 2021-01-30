import React from "react";
import api from "../utils/api";
import defaultAvatar from "../images/avatar.svg";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  const handleApiError = (promise, callback) => {
    promise
      .then((data) => callback(data))
      .catch((error) => {
        if (error instanceof TypeError) {
          props.onMessage(
            "Потеряно соединение с сервером, повторите попытку позднее"
          );
        } else if (typeof error === "string") {
          props.onMessage(error);
        } else {
          props.onMessage("Непредвиденная ошибка, повторите попытку позднее");
        }
      });
  };

  React.useEffect(() => {
    handleApiError(api.getProfileData(), ({ name, about, avatar }) => {
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
    });
    handleApiError(api.getInitialCards(), (data) => setCards(data));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container">
          <img
            className="profile__avatar"
            src={userAvatar || defaultAvatar}
            alt="Аватар пользователя"
          />
          <button
            className="button profile__edit-avatar-button"
            onClick={props.onEditAvatar}
          ></button> 
        </div>
        <div className="profile__text">
          <div className="profile__name-container">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="button button_type_edit profile__edit-button"
              onClick={props.onEditProfile}
              type="button"
            ></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          className="button button_type_add profile__add-button"
          onClick={props.onAddPlace}
          type="button"
        ></button>
      </section>

      <section className="elements">
        {cards.map((data) => {
          return (
            <Card card={data} key={data._id} onCardClick={props.onCardClick} />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
