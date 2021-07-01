import React from 'react';
import styled from 'styled-components';
import { theme } from '../constants';

export const RoundedBox = styled.div`
  border-radius: 8px;
  background-color: ${theme.colors.surfaceLight};
  margin-bottom: 32px;
  padding: 16px;
  box-shadow: 2px 4px 16px rgba(0,0,0,0.2);
`;
