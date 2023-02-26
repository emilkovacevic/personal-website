import styled from 'styled-components'

const Main = styled.main`
  .blogs {
    margin: auto;
    padding-bottom: 10em;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`

export default Main
