import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  &:-ms-expand {
    display: none;
  }
  appearance: none;
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  color: ${COLORS.gray700};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  max-width: 100%;
  padding: 12px 16px;
  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;
