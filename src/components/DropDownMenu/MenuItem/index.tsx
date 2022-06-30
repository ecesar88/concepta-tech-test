import styled from "styled-components";
import { IMenuListProps } from "../../../contracts/Components/DropDownMenu";

const MenuItem = styled.li<IMenuListProps>`
  margin-left: 0 !important;
  width: 100%;
  padding: 0.5rem 1rem;
  cursor: pointer;

  border-radius: 0.5rem;

  display: flex;
  justify-content: ${(props) =>
    props.align === "right" ? "flex-end" : "flex-start"};

  align-items: center;
  margin-left: 1rem;

  &:hover {
    background-color: ${props => props.theme.colors.blue100};
  }
`;

export default MenuItem;
