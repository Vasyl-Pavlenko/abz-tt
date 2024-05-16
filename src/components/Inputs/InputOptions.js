export const getTextOptions = () => ({
  required: 'This field is required',
  minLength: {
    value: 2,
    message: 'Minimum length is 2 characters',
  },
  maxLength: {
    value: 60,
    message: 'Maximum length is 60 characters',
  },
});

export const getEmailOptions = () => ({
  required: 'This field is required',
  minLength: {
    value: 4,
    message: 'Minimum length is 2 characters',
  },
  maxLength: {
    value: 100,
    message: 'Maximum length is 100 characters',
  },
  pattern: {
    value:
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
    message: 'Invalid email format',
  },
});

export const getPhoneOptions = () => ({
  required: 'This field is required',
  pattern: {
    value: /^[\+]{0,1}380([0-9]{9})$/,
    message: 'Phone number should start with the country code +380',
  },
});
