import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  .hero {
    h1,
    p,
    .button {
      display: block;
      text-align: center;
      margin: 1em;
      color: ${(props) => props.theme.text_secondary};
    }
    h1 {
      color: ${(props) => props.theme.text_primary};
    }
  }
`

function NotFound() {
  return (
    <Main>
      <div className="hero">
        <div className="content">
          <h1 data-aos="fade-up" data-aos-duration="1200">
            404!
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
            The page you are looking for could not be found.
          </p>

          <div
            className="button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Link to="/">BACK TO HOME</Link>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default NotFound
