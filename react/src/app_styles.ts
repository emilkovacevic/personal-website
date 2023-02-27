import styled from 'styled-components'

export const AppWrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.page__background};
  .content-wrapper {
    width: 90%;
    margin: auto;
  }

  @media screen and (min-width: 1024px) {
    .content-wrapper {
      max-width: 1500px;
    }
  }
`
export const Application = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.page__background};
  background-image: ${(props) => props.theme.page__background_linear_gradient};
`
