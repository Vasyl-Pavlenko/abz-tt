import styled from '@emotion/styled';

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 43px;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const StyledLabel = styled.label`
  position: relative;
`;

export const StyledInputText = styled.input`
  width: 346px;
  height: 54px;
  padding: 14px 16px;
  font-family: Nunito;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  background-color: transparent;
  border: ${(props) =>
    props.errors
      ? `2px solid ${props.theme.color.redColor}`
      : `1px solid ${props.theme.color.greyColor}`};
  border-radius: 4px;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.color.greyColor};
    font-family: Nunito;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }

  &:placeholder-shown + span {
    visibility: hidden;
  }

  @media screen and (max-width: 450px) {
    box-sizing: border-box;
    display: block;
    height: 54px;
    width: 100%;
  }
`;

export const StyledInputSpan = styled.span`
  position: absolute;
  top: -7px;
  left: 16px;
  padding: 0 2px;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => (props.error ? props.theme.color.redColor : props.theme.color.greyColor)};
  background-color: ${(props) => props.theme.color.whiteColor};
`;

export const StyledTextError = styled.p`
  position: absolute;
  bottom: -16px;
  left: 16px;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.theme.color.redColor};
`;

export const StyledAdditionalInputSpan = styled.span`
  position: absolute;
  bottom: -16px;
  left: 16px;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.theme.color.greyColor};
`;
