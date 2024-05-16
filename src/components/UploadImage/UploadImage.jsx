import PropTypes from 'prop-types';
import {
  StyledErrorSpan,
  StyledImgText,
  StyledLabelUpload,
  StyledTextContainer,
  StyledUploadContainer,
} from './UploadImage.styled';

export const UploadImage = ({ register, watch, errors }) => {
  const validateFileSize = (value) => {
    const allowedFormats = ['image/jpg', 'image/jpeg'];
    const maxSize = 5 * 1024 * 1024;
    const file = value[0];

    if (!file) {
      return 'Choose picture';
    }

    if (file.size > maxSize) {
      return 'File size too large';
    }

    if (!allowedFormats.includes(file.type)) {
      return 'Invalid file format';
    }
  };

  return (
    <>
      <StyledUploadContainer>
        <StyledLabelUpload error={errors.photo} htmlFor="photo">
          Upload
        </StyledLabelUpload>

        <StyledTextContainer error={errors.photo}>
          {watch().photo ? (
            <StyledImgText>{watch().photo[0].name}</StyledImgText>
          ) : (
            <StyledImgText>Upload your photo</StyledImgText>
          )}
        </StyledTextContainer>
        {errors.photo && <StyledErrorSpan>{errors.photo.message}</StyledErrorSpan>}
      </StyledUploadContainer>

      <input
        aria-label="upload your photo. Only jpeg/jpg format and maximum 5mb"
        type="file"
        id="photo"
        {...register('photo', {
          required: 'picture is required',
          validate: validateFileSize,
        })}
        style={{ display: 'none' }}
      />
    </>
  );
};

UploadImage.propTypes = {
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
