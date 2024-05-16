import { StyledContainer, StyledLink, StyledSection, StyledText, StyledTitle } from './Hero.styled';

const Hero = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledTitle>Test assignment for front-end developer</StyledTitle>

        <StyledText>
          What defines a good front-end developer is one that has skilled knowledge of HTML,CSS,
          JS with a vast understanding of User design thinking as they'll be building web
          interfaces with accessibility in mind. They should also be excited to learn, as the
          world of Front-End Development keeps evolving.
        </StyledText>

        <StyledLink href="#signup" aria-label="scroll to block - sign up">
          <p>Sign up</p>
        </StyledLink>
      </StyledContainer>
    </StyledSection>
  )
}

export default Hero;