import Styled from "styled-components";

const ButtonStyled = Styled.button`
  background-color: #FFF;
  padding: 10px 20px;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: ${({ size }) => {
    switch (size) {
      case "large":
        return `20px`;
      default:
        return `13px`;
    }
  }}
`;

export default ButtonStyled;
