import styled from '@emotion/styled';

export const StyledUl = styled.ul`
  display: flex;
  gap: 10px;
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
