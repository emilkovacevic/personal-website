import { useContext, useEffect } from 'react'
import TagCloud from 'TagCloud'
import Section from './skills_styles'
import { DataContext } from '../../../../context/dataContext/dataContext'
import LoadingAnimation from '../../../../components/loading/LoadingAnimation'
import ErrorCard from '../../../../components/error/ErrorCard'

// Importing TagCloud for  3D Rotating Text Sphere

function Skill() {
  // Animation settings for Text Cloud
  useEffect(() => {
    const container = '.tagcloud'

    const radiusValue = (): number => {
      return window.screen.width <= 768 ? 120 : 240
    }

    const options = {
      radius: radiusValue(),
      maxSpeed: 'normal' as const,
      initSpeed: 'normal' as const,
      keep: false,
    }

    TagCloud(
      container,
      [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Next',
        'Express',
        'Prizma',
        'ES6',
        'GIT',
      ],
      options
    )
  }, [])
  const { data, isError, loading } = useContext(DataContext)

  if (loading) {
    return <LoadingAnimation />
  }
  if (isError) {
    return <ErrorCard error="Server error" />
  }

  return (
    <Section className="skill">
      <div className="skill__main-container">
        <div className="skill__header" id="skill__heading">
          <h2>
            <span data-aos="fade-down" data-aos-delay="0" data-aos-offset="200">
              S
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-offset="200"
            >
              K
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-offset="200"
            >
              I
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="600"
              data-aos-offset="200"
            >
              L
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="800"
              data-aos-offset="200"
            >
              L
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="1000"
              data-aos-offset="200"
            >
              S
            </span>
          </h2>
        </div>

        <div className="skill__inner-container">
          <div className="skill__info">
            <div className="skill__details-container">
              {loading ? (
                <div className="skill__details">Loading...</div>
              ) : (
                data?.about?.skills?.map((skill) => (
                  <div key={skill?.name} className="skill__details">
                    <h4>{skill?.name}</h4>
                    <ul>
                      {skill?.data.map((item) => (
                        <li key={item?.title}>
                          <b>{item?.title}</b>: {item?.data}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="tagcloud" data-aos="zoom-in" data-aos-offset="200" />
        </div>
      </div>
    </Section>
  )
}

export default Skill
