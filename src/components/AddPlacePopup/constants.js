const popupSettings = {
  name: "add-element",
  title: "Новое место",
};
const submitButtonSettings = {
  defaultText: "Добавить",
  loadingText: "Добавляем...",
  className: "form__submit-button",
};
const titleInputSettings = {
  name: "title",
  type: "text",
  defaultValue: "",
  placeholder: "Название",
  minLength: "1",
  maxLength: "30",
  required: true,
};
const linkInputSettings = {
  name: "link",
  type: "url",
  defaultValue: "",
  placeholder: "Ссылка на картинку",
  required: true,
};

export {
  popupSettings,
  submitButtonSettings,
  titleInputSettings,
  linkInputSettings,
};
