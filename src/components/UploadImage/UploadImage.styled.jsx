import styled from "@emotion/styled";

export const StyledUploadContainer = styled.div`
  box-sizing: border-box;
  position: relative;

  display: flex;
  width: 100%;
  margin-bottom: 47px;

  align-items: center;
`

export const StyledLabelUpload = styled.label`
  box-sizing: border-box;

  padding: 13px 14px;

  font-family: Nunito;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: ${({ theme }) => theme.color.blackColor};
  text-align: center;

  border: ${(props) =>
    props.error
      ? `2px solid ${props.theme.color.redColor}`
      : `1px solid ${props.theme.color.blackColor}`};
  border-radius: 4px 0px 0px 4px;

  cursor: pointer;
`;

export const StyledTextContainer = styled.div`
  width: 100%;
  padding: 13px 16px;

  border: ${(props) =>
    props.error
      ? `2px solid ${props.theme.color.redColor}`
      : `1px solid ${props.theme.color.greyColor}`};
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
`;

export const StyledImgText = styled.p`
  line-height: 26px;
  color: ${({ theme }) => theme.color.greyColor};
`;

export const StyledErrorSpan = styled.p`
  position: absolute;
  bottom: -16px;
  left: 16px;

  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.color.redColor};
`;