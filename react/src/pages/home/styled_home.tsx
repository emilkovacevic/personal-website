import styled from 'styled-components'

const Main = styled.main`
  .hero {
    &::before,
    &::after {
      position: absolute;
      content: '';
      z-index: 1;
      opacity: 0.1;
      width: 2em;
      height: 2em;
    }

    &::before {
      content: '';
      top: 80%;
      left: 10%;
      border: 0.2em solid ${(props) => props.theme.homepage__square_artifact};
      transform: rotate(85deg);
    }

    &::after {
      top: 20%;
      right: 5%;
      content: '';
      background: url('/images/icons/triangle.svg') no-repeat;
      font-size: 36px;
      background-size: 100% 100%;
      transform: rotate(35deg);
    }

    &__container {
      position: relative;
      top: 0;
      display: flex;
      flex-wrap: wrap;
      padding: 15% 0em;
      justify-content: center;
      align-items: center;
      font-family: 'Lato', sans-serif;
      &::before {
        position: absolute;
        top: 15%;
        left: 10%;
        content: '';
        width: 2em;
        height: 2em;
        z-index: 1;
        border: 0.2em solid ${(props) => props.theme.homepage__square_artifact};
        opacity: 0.1;
        transform: rotate(79deg);
      }
      &::after {
        position: absolute;
        top: 48%;
        left: 36%;
        content: '';
        width: 2em;
        height: 0.2em;
        font-size: 38px;
        z-index: 1;
        border: 0.2em solid ${(props) => props.theme.homepage__square_artifact};
        opacity: 0.1;
        transform: rotate(110deg);
      }
    }

    &__alphabet {
      display: inline-block;
      text-shadow: ${(props) => props.theme.text_shadow};
      color: ${(props) =>
        props.theme.homePage__hero__intro_box_color_aplhabet__first_word};
    }

    &__animated-alphabet-box {
      font-family: 'RedWingBold', sans-serif;
      margin-left: 10%;
      text-transform: uppercase;
      font-size: 3em;
      font-weight: 700;
      letter-spacing: 0.1em;

      span:last-child {
        color: ${(props) =>
          props.theme.homePage__hero__intro_box_color_aplhabet__second_word};
        margin-right: 0.5em;
      }
    }

    &__alphabet--last {
      margin-right: 0.15em;
    }
    &__intro-box {
      position: relative;
      color: ${(props) => props.theme.homePage__hero__intro_box_color_text};
      z-index: 2;
    }

    &__intro-line {
      position: relative;
      width: 9.2%;
      height: 0.05em;
      margin-right: 0.5em;
      display: inline-block;
      background: ${(props) =>
        props.theme.homePage__hero__intro_box_color_aplhabet__first_word};
    }

    &__intro-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      text-transform: uppercase;
      text-shadow: ${(props) => props.theme.text_shadow};
      font-size: 1.2em;
      font-weight: 400;
    }
    &__description {
      margin-left: 10%;
      font-weight: 300;
      line-height: 1.5;

      p {
        width: 80%;
        text-shadow: ${(props) => props.theme.text_shadow};
        text-align: justify;
        margin: 1rem 0;
        span {
          margin-bottom: 0.5em;
          border-bottom: 0.07em solid #ff0000;
          padding-bottom: 0.2em;
        }
      }
    }
    &__dev-text {
      position: relative;
      display: inline-block;
      z-index: 2;
    }
    &__buttons {
      position: relative;
      margin-top: 3em;
      margin-left: 10%;
      z-index: 2;
      a {
        position: relative;
        display: inline-block;
        text-decoration: none;
        font-size: 1em;
        padding: 0.5em 1em;
      }
    }
    &__know-btn {
      color: ${(props) => props.theme.homePage__hero__know_button__text};
      margin-right: 1.5em;
      background: ${(props) =>
        props.theme.homePage__hero__know_button__background};
      border: 0.1em solid
        ${(props) => props.theme.homePage__hero__know_button__border};

      &:hover {
        background: transparent;
        border: 0.1em solid
          ${(props) => props.theme.homePage__hero__know_button__border__hover};
        color: ${(props) =>
          props.theme.homePage__hero__know_button__text__hover};
      }
    }

    &__contact-btn {
      color: ${(props) => props.theme.homePage__contact_button__text};
      border: 0.1em solid
        ${(props) => props.theme.homePage__hero__contact_button__border__hover};
      &:hover {
        color: ${(props) => props.theme.homePage__contact_button__text__hover};
        background: ${(props) =>
          props.theme.homePage__contact_button__background};
        border: 0.1em solid;
        ${(props) => props.theme.homePage__contact_button__border__hover};
      }
    }
    &__pc_desk {
      margin-top: 2rem;
      width: 100%;
      &::after {
        position: absolute;
        content: '';
        width: 2em;
        height: 2em;
        opacity: 0.25;
        top: 10%;

        content: '';
        display: inline-block;
        width: 30px;
        height: 30px;
        color: #138808;
        position: relative;
        right: 5em;
        bottom: 2em;
        background: url('/images/icons/angle-down.svg') no-repeat;
        background-size: 100% 100%;
        transform: rotate(230deg);
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    @media screen and (min-width: 1024px) {
      .hero__container {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      p {
        font-weight: 400;
        font-size: 1.5em;
      }
      a {
        font-size: 1.2em;
        font-weight: 700;
      }
      * {
        padding: 0;
      }
    }
  }

  @keyframes socialAccounts {
    0% {
      width: 0.2em;
    }
    100% {
      width: 3em;
    }
  }

  @keyframes textColorAnimation {
    0% {
      background: linear-gradient(107deg, #ff9933 30%, #ffffff, #138808 75.71%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      -webkit-filter: hue-rotate(0deg);
    }
    100% {
      background: linear-gradient(107deg, #ff9933 30%, #ffffff, #138808 75.71%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      -webkit-filter: hue-rotate(360deg);
    }
  }

  @keyframes textZoomAnimation {
    0% {
      transform: scale(10, 5);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  @keyframes textInOutAnimation {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(10, 5);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .alphabet-animated {
    :hover {
      animation: alphabetAnimation 1s ease-in-out infinite;
    }
  }
  .alphabet-animated {
    animation: alphabetAnimation 1s ease-in-out;
    color: ${(props) =>
      props.theme.homePage__hero__intro_box_color_aplhabet__second_word};
  }

  @keyframes alphabetAnimation {
    0% {
      transform: scale(1.2, 0.5);
    }
    16% {
      transform: scale(1.2, 0.5);
    }
    25% {
      transform: scale(1.2, 0.5);
    }
    32% {
      transform: scale(0.8, 1.1);
    }
    48% {
      transform: scale(0.95, 1);
    }
    64% {
      transform: scale(0.8, 1.2);
    }
    80% {
      transform: scale(1.15, 1);
    }
    87% {
      transform: scale(1.15, 1);
    }
    90% {
      /* This will add the shaking effect one time almost at the end   */
      transform: scale(0.8, 1);
    }
    95% {
      transform: scale(1.05, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`
export default Main
