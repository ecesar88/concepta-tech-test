import styled, { Interpolation } from "styled-components";

interface IBoxProps {
  children?: React.ReactNode;
  styles?: Interpolation<React.CSSProperties>;
}

const Box = styled.div<IBoxProps>`
  ${({ styles }) => styles}
`;

export default Box;
