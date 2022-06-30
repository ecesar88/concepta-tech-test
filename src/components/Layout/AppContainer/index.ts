import styled from "styled-components";

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.black200};
  color: ${(props) => props.theme.colors.white100};
`;

export default AppContainer;
