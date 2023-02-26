import styled from 'styled-components'

const Section = styled.section`
  .skill {
    text-shadow: ${(props) => props.theme.text_shadow};

    &__main-container {
      position: relative;
      top: 0;
      padding: 2% 0;
      color: ${(props) => props.theme.text_primary};
    }

    &__inner-container {
      position: relative;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      h4 {
        margin: 1rem 0;
        font-size: 1.5em;
        font-family: 'RedWingBold', sans-serif;
        font-weight: bolder;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: ${(props) => props.theme.aboutPage__table_color_headline};
      }
      li {
        list-style-position: inside;
        padding: 0.5rem 0;
        b {
          font-family: 'Lato', sans-serif;
          letter-spacing: 1px;
          text-shadow: ${(props) => props.theme.text_shadow};
        }
      }
    }

    &__header {
      position: relative;
      top: 0;
      text-align: center;
      font-family: 'RedWingBold', sans-serif;
      font-weight: bolder;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      font-size: 2em;
      color: ${(props) => props.theme.text_secondary};

      &::after {
        position: absolute;
        bottom: 0;
        left: 35%;
        content: '';
        width: 30%;
        height: 0.05em;
        background-color: ${(props) => props.theme.text_secondary};
      }

      h2 {
        margin-top: 5rem;
        margin-bottom: 5rem;
        text-align: center;
        span {
          position: relative;
        }
      }
    }

    &__heading {
      h2 {
        position: relative;
        display: inline-block;
        animation: headingAnimation 2.5s ease-in-out 1;
        animation-delay: 0.5s;
        animation-fill-mode: forwards;
      }
    }

    @keyframes headingAnimation {
      0% {
        left: 0;
        font-size: 2em;
      }
      100% {
        left: -43%;
        font-size: 0.7em;
        letter-spacing: 0.05em;
        color: ${(props) => props.theme.text_primary};
      }
    }

    &__info {
      display: flex;
    }

    &__skill-tags {
      letter-spacing: 0.05em;
      span {
        font-family: 'RedWingLight', sans-serif;
        display: inline-block;
        padding: 0.2em 1em;
        border-radius: 0.25em;
        background-color: ${(props) => props.theme.text_primary_background};
        color: ${(props) => props.theme.text_secondary};
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
      }
    }
  }
  .tagcloud {
    margin: auto;
    .tagcloud--item {
      color: ${(props) => props.theme.link_color};
      font-size: 1.2rem;
      letter-spacing: 8px;
      :hover {
        color: ${(props) => props.theme.link_color_hover};
      }
    }
  }
`

export default Section
