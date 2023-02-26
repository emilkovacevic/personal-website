import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  padding: 6rem 2rem;
  color: ${(props) => props.theme.text_primary};
  position: relative;
  letter-spacing: 0.5rem;
  &::after {
    content: '';
    width: 100%;
    color: ${(props) => props.theme.text_primary};
    text-shadow: 3px 4px 2px ${(props) => props.theme.text_primary};
    text-decoration: underline;
    text-underline-position: under;
    position: absolute;
    z-index: 1;
    top: 2rem;
    left: 50%;
    transform: translate(-50%);
    font-size: 5rem;
    ${(props) => props.title && `content: "${props.title}";`};
    opacity: 0.1;
  }
  @media screen and (max-width: 765px) {
    &::after {
      font-size: 3.5rem;
    }
  }
  @media screen and (max-width: 520px) {
    &::after {
      font-size: 2.5rem;
    }
  }
`

type Props = {
  title: string
}

function Headline({ title }: Props) {
  return <Title title={title}>{title}</Title>
}

export default Headline
