import Skills from './sections/skills/Skills'
import Main from './about_styled'
import Info from './sections/Info/Info'

function About() {
  return (
    <Main data-aos="fade-up" data-aos-duration="3000">
      <Info />
      <Skills />
    </Main>
  )
}

export default About
