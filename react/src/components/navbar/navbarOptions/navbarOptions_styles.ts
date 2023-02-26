import styled from 'styled-components'

interface NavProps {
  position: boolean
}

const NavBarOptions = styled.div<NavProps>`
  position: absolute;
  bottom: 4rem;
  left: -1.2em;
  display: flex;
  flex-direction: column;
  z-index: 40;
  .navbarOptions {
    border-radius: 5px 5px 0 0;
    background-color: ${(props) => props.theme.navbar_color_background};
    button {
      margin: 1em;
      background: ${(props) => props.theme.navbar__button_color_background};
      color: ${(props) => props.theme.navbar__button_color_text};
      border-radius: 50%;
      font: inherit;
      padding: 0.65rem;
      border: none;
      &:hover {
        background-color: ${(props) =>
          props.theme.navbar__button_color_background__hover};
      }
    }
  }
  .layout-button {
    display: none;
  }
  .animate-in {
    animation: animate-in 0.3s ease-in;
    animation-fill-mode: forwards;
  }

  .animate-out {
    animation: animate-out 0.3s ease-out;
    animation-fill-mode: forwards;
  }

  @keyframes animate-in {
    0% {
      opacity: 0;
      transform: translateY(150%);
    }
    100% {
      opacity: 1;
      transform: translateY(-8%);
    }
  }
  @keyframes animate-out {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(150%);
    }
  }

  @media screen and (min-width: 1024px) {
    bottom: -0.25rem;
    left: ${(props) => (props.position ? '3rem' : '-9.5rem')};
    .navbarOptions {
      height: 4.8rem;
      font-size: 1rem;
      border-radius: 5px 0 0 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .layout-button {
      display: block;
    }
    .animate-in {
      animation: animate-in-vertical 0.3s ease-in;
      animation-fill-mode: forwards;
    }

    .animate-out {
      animation: animate-out-vertical 0.3s ease-out;
      animation-fill-mode: forwards;
    }
    @keyframes animate-in-vertical {
      0% {
        opacity: 0;
        transform: translateX(
          ${(props) => (props.position ? '-150%' : '150%')}
        );
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes animate-out-vertical {
      0% {
        opacity: 1;
        transform: translateX(0);
      }
      100% {
        opacity: 0;
        transform: translateX(
          ${(props) => (props.position ? '-150%' : '150%')}
        );
      }
    }
  }
`
export default NavBarOptions
