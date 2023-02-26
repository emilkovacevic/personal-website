import styled from 'styled-components'

const Main = styled.main`
  padding-bottom: 10em;
  .nav {
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;

    .nav-item {
      border: none;
      font-size: 1.2rem;
      color: ${(prop) => prop.theme.portfolioPage__nav_text};
      background-color: transparent;
      :hover,
      :active,
      :focus {
        color: ${(prop) => prop.theme.portfolioPage__nav_text__hover};
        text-decoration: underline;
      }
    }
    .active {
      color: ${(prop) => prop.theme.portfolioPage__nav_text__active};
      text-decoration: underline;
    }
  }
  .projects {
    margin: 2rem 0;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
`
export default Main
