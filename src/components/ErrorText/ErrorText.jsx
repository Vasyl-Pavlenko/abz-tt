import React from 'react';
import PropTypes from 'prop-types';
import { StyledTextError } from '../Inputs';

export const ErrorText = ({ children }) => {
  return <StyledTextError>{children}</StyledTextError>;
};

ErrorText.propTypes = {
  children: PropTypes.node.isRequired,
};
