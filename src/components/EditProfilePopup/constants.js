const popupSettings = {
  name: "edit-profile",
  title: "Редактировать профиль",
};
const submitButtonSettings = {
  defaultText: "Сохранить",
  loadingText: "Сохранение...",
  className: "form__submit-button",
};
const nameInputSettings = {
  name: "name",
  type: "text",
  placeholder: "Имя",
  minLength: "2",
  maxLength: "40",
  required: true,
};
const descriptionInputSettings = {
  name: "job",
  type: "text",
  placeholder: "Деятельность",
  required: true,
  minLength: "2",
  maxLength: "200",
};

export {
  popupSettings,
  submitButtonSettings,
  nameInputSettings,
  descriptionInputSettings,
};
