import PropTypes from 'prop-types';
import { Input } from '../index';
import { getTextOptions, getEmailOptions, getPhoneOptions } from './InputOptions';
import { StyledInputContainer } from './Inputs.styled';

const DATA = [
  {
    id: 1,
    label: 'Name',
    name: 'name',
    type: 'text',
    placeholder: 'Your name',
    options: getTextOptions(),
  },
  {
    id: 2,
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    options: getEmailOptions(),
  },
  {
    id: 3,
    label: 'Phone',
    name: 'phone',
    type: 'tel',
    placeholder: 'Phone',
    options: getPhoneOptions(),
  },
];

export const Inputs = ({ register, errors }) => {
  return (
    <StyledInputContainer>
      {DATA.map(({ id, label, name, type, placeholder, options }) => (
        <Input
          key={id}
          label={label}
          name={name}
          type={type}
          placeholder={placeholder}
          register={register}
          errors={errors}
          options={options}
        />
      ))}
    </StyledInputContainer>
  );
};

Inputs.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
