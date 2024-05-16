import { UsersList } from "../index";
import { StyledContainer, StyledSection, StyledTitle } from './Users.styled';

const Users = () => {

  return (
    <StyledSection id="users">
      <StyledContainer>

        <StyledTitle>Working with GET request</StyledTitle>

        <UsersList />
        
      </StyledContainer>
    </StyledSection>
  )
}

export default Users;