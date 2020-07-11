import React from "react";
import ButtonStyled from "./index.styled";

const Button = (props) => {
  return (
    <ButtonStyled onClick={props.onClick} {...props}>
      {props.text}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  type: "button",
  onClick: () => {},
  text: "",
};

export default Button;
