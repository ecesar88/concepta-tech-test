import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black600};
  border: none;
  border-radius: 0.4rem;
  padding: 0.3rem;
`;

export default Button;
