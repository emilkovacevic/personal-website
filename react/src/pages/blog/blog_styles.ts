import styled from 'styled-components'

const Main = styled.main`
  .blogs {
    margin: auto;
    padding-bottom: 10em;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`

export default Main
