import styled from '@emotion/styled';

export const StyledForm = styled.form`
  position: relative;
  width: 380px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 450px) {
    display: flex;
    width: 100%;
  }
`;

export const StyledButtonAdd = styled.input`
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 34px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: ${({ disabled, theme }) =>
    disabled ? theme.color.whiteColor : theme.color.blackColor};

  background: ${({ disabled, theme }) =>
    disabled ? theme.color.greyColor : theme.button.primaryColor};
  border: none;
  border-radius: 80px;
  cursor: ${({ disabled }) => !disabled && 'pointer'};

  &:hover {
    ${({ disabled, theme }) => !disabled && `background: ${theme.button.hoverColor}`}
  }
`;

export const StyledButtonContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
