import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper>
      <IconWrapper size={size}>
        <Icon id={icon} size={STYLES[size].iconSize} />
      </IconWrapper>
      <Input size={size} width={width} placeholder={placeholder} />
      <VisuallyHidden>Search</VisuallyHidden>
    </Wrapper>
  );
};

const dynamicStyles = (size) => {
  const styles = STYLES[size];

  if (STYLES[size] === undefined) {
    throw new Error(`no styles found for size ${size}`);
  }

  const result = css`
    border-bottom: ${styles.borderThickness + 'px'} solid ${COLORS.black};
    font-size: ${styles.fontSize / 16}rem;
    height: ${styles.height / 16}rem;
    padding-left: ${styles.height}px;
  `;

  return result;
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: ${p => STYLES[p.size].iconSize}px;
`;

const Input = styled.input`
  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  border: none;
  color: inherit;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  outline-offset: 2px;
  width: ${p => p.width}px;
  ${ p => dynamicStyles(p.size) }
`;

export default IconInput;
