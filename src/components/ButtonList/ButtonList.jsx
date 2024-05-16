import { StyledLink, StyledUl } from "./ButtonList.styled"

const DATA = [
  {
    id: 1,
    name: "Users",
    link: "#users",
  },
  {
    id: 2,
    name: "Sign up",
    link: "#signup",
  }
]

export const ButtonList = () => {
  return (
    <nav>
      <StyledUl>
        {DATA.map(({ id, name, link }) => (
          <li key={id}>
            <StyledLink href={link} aria-label={`scroll to block - ${name}`}>
              <p>{name}</p>
            </StyledLink>
          </li>
        ))}
      </StyledUl>
    </nav>
  );
}