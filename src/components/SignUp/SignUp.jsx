import { SignUpForm } from '../index';
import { useSelector } from 'react-redux';
import { StyledContainer, StyledSection, StyledTitle } from './SignUp.styled';
import { ReactComponent as SuccesSvg } from '../../Assets/success-image.svg';

const SignUp = () => {
  const { isSignUp } = useSelector((state) => state.signUp);

  return (
    <StyledSection id="signup">
      <StyledContainer>
        <StyledTitle>
          {isSignUp ? 'User successfully registered' : 'Working with POST request'}
        </StyledTitle>

        {isSignUp ? <SuccesSvg width={328} height={290} /> : <SignUpForm />}
      </StyledContainer>
    </StyledSection>
  );
};
  
  export default SignUp;
