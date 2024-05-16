import styled from '@emotion/styled';

export const StyledSection = styled.section`
  padding-bottom: 70px;
`;

export const StyledContainer = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 450px) {
    padding: 0 16px;
  }
`;

export const StyledTitle = styled.h2`
  margin-bottom: 50px;
  font-size: ${({ theme }) => theme.title.fontSize};
  font-weight: ${({ theme }) => theme.title.fontWeight};
  line-height: ${({ theme }) => theme.title.lineHeight};
  color: ${({ theme }) => theme.color.blackColor};
  text-align: center;
`;
