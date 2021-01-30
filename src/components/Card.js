function Card(props) {
  const handleClick = () => {
    props.onCardClick(props.card);
  };

  return (
    <article className="element">
      <img
        className="element__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="element__sidebar">
        <h3 className="element__title">{props.card.name}</h3>
        <div className="element__like-container">
          <button
            className="button button_type_like element__like-button"
            type="button"
          ></button>
          <span className="element__like-count">{props.card.likes.length}</span>
        </div>
        <button
          className="button button_type_delete button_hidden element__delete-button"
          type="button"
        ></button>
      </div>
    </article>
  );
}

export default Card;
