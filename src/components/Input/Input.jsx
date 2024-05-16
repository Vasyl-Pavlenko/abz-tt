import PropTypes from 'prop-types';
import { ErrorText } from '../ErrorText';
import {
  StyledInputText,
  StyledLabel,
  StyledInputSpan,
  StyledAdditionalInputSpan,
} from '../Inputs';

export const Input = ({ label, name, type, placeholder, register, errors, options }) => {
  const isPhone = name === 'phone';

  return (
    <StyledLabel>
      <StyledInputText
        aria-label={`Write your ${label.toLowerCase()}`}
        autoComplete="off"
        {...register(name, options)}
        type={type}
        placeholder={placeholder}
        errors={errors[name]}
      />

      {errors[name] && <ErrorText>{errors[name].message}</ErrorText>}

      <StyledInputSpan error={errors[name]}>{label}</StyledInputSpan>

      {isPhone && !errors[name] && (
        <StyledAdditionalInputSpan>+38 (XXX) XXX - XX - XX</StyledAdditionalInputSpan>
      )}
    </StyledLabel>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
