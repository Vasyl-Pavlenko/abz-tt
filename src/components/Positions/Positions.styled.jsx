import styled from '@emotion/styled';

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 7px;

  margin-bottom: 47px;
`;

export const StyledSelectText = styled.p`
  margin-bottom: 11px;

  line-height: 26px;
  color: ${({ theme }) => theme.color.blackColor};
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const StyledPositionName = styled.p`
  color: ${({ theme }) => theme.color.blackColor};
`;
