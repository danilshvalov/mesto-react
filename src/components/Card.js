function Card({card, onCardClick}) {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <article className="element">
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="element__sidebar">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__like-container">
          <button
            className="button button_type_like element__like-button"
            type="button"
          ></button>
          <span className="element__like-count">{card.likes.length}</span>
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
