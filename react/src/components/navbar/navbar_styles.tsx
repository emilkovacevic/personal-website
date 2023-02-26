import styled from 'styled-components'

interface NavProps {
  position: boolean
}

const Nav = styled.nav<NavProps>`
  position: fixed;
  z-index: 30;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 0.25rem 0;
  background-color: ${(props) => props.theme.navbar_color_background};
  width: 100%;
  .nav_settings {
    position: relative;
    z-index: 30;
  }
  .button {
    all: unset;
    text-decoration: none;
    color: ${(props) => props.theme.linkText};
    background-color: ${(props) => props.theme.navbar__button_color_background};
    padding: 0.5em;

    border-radius: 50%;
    font-size: 1rem;
    margin: 1rem 0;
    transition: all 0.3s ease-in-out;
    * {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &:hover,
    &:focus {
      outline: 1px solid
        ${(props) => props.theme.navbar__button_color_background__active};
      background-color: ${(props) =>
        props.theme.navbar__button_color_background__hover};
    }
  }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  .nav_routes {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-shrink: 1;
  }
  .active {
    background-color: ${(props) =>
      props.theme.navbar__button_color_background__active};
  }
  a {
    all: unset;
    color: ${(props) => props.theme.linkText};
    background-color: ${(props) => props.theme.navbar__button_color_background};
    padding: 0.5em;
    border-radius: 50%;
    font-size: 1rem;
    margin: 1rem 0;
    transition: all 0.3s ease-in-out;
    &:hover,
    &:focus {
      outline: 1px solid ${(props) => props.theme.primary};
      background-color: ${(props) =>
        props.theme.navbar__button_color_background__hover};
    }
  }
  .tooltiptext {
    visibility: hidden;
    position: absolute;
    width: 120px;
    background-color: ${(props) =>
      props.theme.navbar__tooltip_color_background};
    color: ${(props) => props.theme.navbar__tooltip_color_text};
    text-align: center;
    padding: 5px 0;
    z-index: 1;
    transition: visibility 0s ease-in-out, transform 0.3s ease-in-out;
    transition-delay: 0.3s;
    transform: translateZ(120px);
    border-radius: 5px;
    padding: 5px 0;
    right: ${(props) => (props.position ? ' -7.2em' : ' 3em')};
    top: 0.3em;
    z-index: 5;
    transition-delay: 0.1s;
    transform: scale(0);
  }

  @media screen and (min-width: 1024px) {
    bottom: 50%;
    transform: translateY(50%);
    max-width: fit-content;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0.5em;

    .nav_routes {
      flex-direction: column;
    }
    .button {
      font-size: 1.2rem;
    }
    a {
      margin: 1rem;
      font-size: 1.2rem;
    }

    .tooltip {
      position: relative;
      display: inline-block;
    }

    .tooltip .tooltiptext {
      visibility: hidden;
    }

    .tooltip:hover .tooltiptext {
      visibility: visible;
      transform: scale(1);
    }
  }
`
export default Nav
