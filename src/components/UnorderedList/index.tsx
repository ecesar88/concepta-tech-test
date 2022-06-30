import styled, { Interpolation } from "styled-components";

interface IUnorderedList {
  children?: React.ReactNode;
  styles?: Interpolation<React.CSSProperties>;
}

const UnorderedList = styled.ul<IUnorderedList>`
  ${({ styles }) => styles}
`;

export default UnorderedList;
