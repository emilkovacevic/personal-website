import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;

  .loading-text {
    .space {
      padding-right: 1em;
    }
    .char {
      opacity: 0;
      animation: loading-text 2s infinite ease-in-out;
      display: inline-block;
      color: ${(props) => props.theme.text_primary};
      &:nth-child(1) {
        animation-delay: 0.9s;
      }
      &:nth-child(2) {
        animation-delay: 1s;
      }
      &:nth-child(3) {
        animation-delay: 1.1s;
      }
      &:nth-child(4) {
        animation-delay: 1.2s;
      }
      &:nth-child(5) {
        animation-delay: 1.3s;
      }
      &:nth-child(6) {
        animation-delay: 1.4s;
      }
      &:nth-child(7) {
        animation-delay: 1.5s;
      }
      &:nth-child(8) {
        animation-delay: 1.6s;
      }
      &:nth-child(9) {
        animation-delay: 1.7s;
      }
    }
  }

  @keyframes loading-text {
    0% {
      transform: translateY(0%);
      opacity: 1;
    }
    20% {
      transform: translateY(-60%);
      opacity: 1;
    }
    40% {
      transform: translateY(-100%);
      opacity: 0;
    }
    60% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

function LoadingAnimation() {
  return (
    <Container>
      <h2 className="loading-text text-center text-uppercase">
        <span className="char">L</span>
        <span className="char">o</span>
        <span className="char">a</span>
        <span className="char">d</span>
        <span className="char">i</span>
        <span className="char">n</span>
        <span className="char space">g</span>
        <span className="char">3</span>
        <span className="char">D</span>
      </h2>
    </Container>
  )
}

export default LoadingAnimation
