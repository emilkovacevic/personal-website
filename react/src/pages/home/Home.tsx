import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ModelViewer from '../../components/3dmodel/Controller'
import Main from './styled_home'

function Home() {
  useEffect(() => {
    const alphbets = document.getElementsByClassName('hero__alphabet')
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < alphbets.length; i++) {
      alphbets[i]?.addEventListener('animationend', () => {
        alphbets[i].classList.remove('alphabet-animated')
      })

      alphbets[i]?.addEventListener('mouseover', () => {
        alphbets[i].classList.add('alphabet-animated')
      })
    }
  }, [])

  return (
    <Main>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__intro-box">
            <p className="hero__intro-title">
              <span className="hero__intro-line" data-aos="fade-down" />
              Emil Kovačević
            </p>
            <h1 className="hero__animated-alphabet-box">
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                S
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                O
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                F
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                T
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                W
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                A
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                R
              </span>
              <span
                className="hero__alphabet hero__alphabet--last"
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                E
              </span>
              <span
                className="hero__developer-text"
                data-aos="zoom-out-down"
                data-aos-delay="1800"
              >
                <span className="hero__dev-text">Developer</span>
              </span>
            </h1>
            <div
              className="hero__description"
              data-aos="fade"
              data-aos-delay="1800"
            >
              <p>
                Skilled in developing web applications with elegant and
                efficient code.
              </p>
            </div>

            <div className="hero__buttons">
              <Link
                className="hero__know-btn"
                to="/about"
                data-aos="fade-up"
                data-aos-delay="1800"
              >
                Know more
              </Link>
              <Link
                className="hero__contact-btn"
                to="/contact"
                data-aos="fade-up"
                data-aos-delay="2000"
              >
                Contact me
              </Link>
            </div>
          </div>
          <div
            className="hero__pc_desk"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <ModelViewer />
          </div>
        </div>
      </div>
    </Main>
  )
}

export default Home
