import styled, { Interpolation } from "styled-components";

interface IFlexProps {
  children?: React.ReactNode;
  styles?: Interpolation<React.CSSProperties>;
}

const Flex = styled.div<IFlexProps>`
  display: flex;

  ${({ styles }) => styles}
`;

export default Flex;
