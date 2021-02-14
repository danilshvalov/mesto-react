import DOMProps from "./constants";

const getOnlyDOMProps = (props) => {
  return Object.assign(
    ...Object.keys(props)
      .filter((key) => DOMProps.some((prop) => prop === key))
      .map((key) => ({ [key]: props[key] }))
  );
};

export default getOnlyDOMProps;
