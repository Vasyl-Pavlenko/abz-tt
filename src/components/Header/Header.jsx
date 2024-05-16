import { ButtonList } from '../ButtonList';
import { StyledContainer, StyledHeaderContainer, StyledLink } from './Header.styled';
import { ReactComponent as Logo } from '../../Assets/Logo.svg';

export const Header = () => {
  return (
    <header>
      <StyledContainer>
        <StyledHeaderContainer>
          <StyledLink href="./">
            <Logo width={104} height={26} aria-label="logo and link to reload page" />
          </StyledLink>

          <ButtonList />
        </StyledHeaderContainer>
      </StyledContainer>
    </header>
  );
};
