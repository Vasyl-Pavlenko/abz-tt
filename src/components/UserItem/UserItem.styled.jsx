import styled from '@emotion/styled';

export const StyledImg = styled.img`
  width: 70px;
  height: 70px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 100%;
`;

export const StyledName = styled.h3`
  width: max-content;
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.color.blackColor};
  text-align: center;
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledPosition = styled.p`
  color: ${({ theme }) => theme.color.blackColor};
  text-align: center;
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.blackColor};
  text-decoration: none;
  text-align: center;
`;
