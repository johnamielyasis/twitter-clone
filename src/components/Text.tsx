import styled from 'styled-components';
import { theme } from '../constants';

export interface TextProps {
  variant: 'heading' | 'caption' | 'body';
}

export const Text = styled.span<TextProps>`
  ${(p) => {
    return `
      color: ${p.variant === 'heading' ? theme.colors.textDefault : theme.colors.textLight};
      font-size: ${p.variant === 'caption' ? '12px' : '16px'};
    `
  }}
`;
