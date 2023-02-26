import styled from 'styled-components'

const Wrapper = styled.section`
  height: 30vh;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 20vh;
    color: ${(props) => props.theme.text_primary};
  }
`
type Props = {
  error: string
}

function ErrorCard({ error = 'We encountered an error' }: Props) {
  return <Wrapper>{error && <h1>{error}</h1>}</Wrapper>
}

export default ErrorCard
