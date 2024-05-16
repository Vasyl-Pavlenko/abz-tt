import styled from "@emotion/styled";

import defaultTheme from '../../Assets/theme/defaultTheme.webp';
import tabletTheme from '../../Assets/theme/tabletTheme.webp'
import mobileTheme from '../../Assets/theme/mobileTheme.webp'
import smallTheme from '../../Assets/theme/smallTheme.webp'

export const StyledSection = styled.section`
  max-width: 1170px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 140px;

  background-image: url(${defaultTheme});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 1024px) {
    background-image: url(${tabletTheme});
  }

  @media screen and (max-width: 768px) {
    background-image: url(${mobileTheme});
  }

  @media screen and (max-width: 360px) {
    background-image: url(${smallTheme});
    padding: 0 16px;
  }
`;

export const StyledContainer = styled.div`
  max-width: 380px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  padding-top: 164px;
  padding-bottom: 163px;

  @media screen and (max-width: 768px) {
    padding-top: 89px;
    padding-bottom: 88px;
  }

  @media screen and (max-width: 360px) {
    padding-top: 40px;
    padding-bottom: 71px;
  }
`;

export const StyledTitle = styled.h1`
  margin-bottom: 21px;

  font-size: ${({ theme }) => theme.title.fontSize};
  font-weight: ${({ theme }) => theme.title.fontWeight};
  line-height: ${({ theme }) => theme.title.lineHeight};
  color: ${({ theme }) => theme.color.whiteColor};
  text-align: center;
`;

export const StyledText = styled.p`
  margin-bottom: 32px;

  color: ${({ theme }) => theme.color.whiteColor};
  text-align: center;
`;

export const StyledLink = styled.a`
  width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0;

  text-decoration: none;

  background: ${({ theme }) => theme.button.primaryColor};
  border-radius: 80px;

  & p {
    display: inline-block;
    color: ${({ theme }) => theme.color.blackColor};
  }

  &:hover {
    background: ${({ theme }) => theme.button.hoverColor};
  }
`;

