import styled from 'styled-components';

export interface FlexProps {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  margin?: string;
  padding?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${(p) => p.alignItems && `align-items: ${p.alignItems};`}
  ${(p) => p.justifyContent && `justify-content: ${p.justifyContent};`}
  ${(p) => p.flexDirection && `flex-direction: ${p.flexDirection};`}
  ${(p) => p.margin && `margin: ${p.margin};`}
  ${(p) => p.padding && `padding: ${p.padding};`}
`;