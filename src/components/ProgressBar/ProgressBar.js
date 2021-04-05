/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return (
    <Container size={size} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <FillWrapper>
        <Fill value={value} size={size} />
      </FillWrapper>
    </Container>
  );
};

const small = css`
  border-radius: 4px;
  height: 8px;
`;

const medium = css`
  border-radius: 4px;
  height: 12px;
`;

const large = css`
  border-radius: 8px;
  height: 24px;
  padding: 4px;
`;

const mappings = {
  small,
  medium,
  large,
};

const Container = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
  ${ p => mappings[p.size] }
`;

const FillWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden; /* trims corners when the progress bar is almost full */
  width: 100%;
  height: 100%;
`;

const Fill = styled.div`
  background-color: ${COLORS.primary};
  width: ${ p => p.value + '%' };
  height: 100%;
`;

export default ProgressBar;
