import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AnimatedCursor from 'react-animated-cursor'
import { ThemeProvider } from 'styled-components'
import useThemeSwitcher from './hooks/useTheme'

import { darkTheme, lightTheme } from './theme_colors'
import { AppWrapper, Application } from './app_styles'
import ScrollToTop from './hooks/useScrollToTop'
import Navbar from './components/navbar/Navbar'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import Blog from './pages/blog/Blog'

import NotFound from './pages/notfound/NotFound'
import DataProvider from './context/dataContext/dataContext'
import ProjectDetails from './dynamicRoutes/Project/ProjectDetails'
import getCurrentYear from './utils/getDate'

function App() {
  const { theme, handleThemeSwitch } = useThemeSwitcher()
  return (
    <ThemeProvider theme={theme === 'dark-theme' ? darkTheme : lightTheme}>
      <AnimatedCursor
        innerSize={10}
        outerSize={44}
        color="255, 160, 1"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />

      <DataProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AppWrapper>
            <Application>
              <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} />
              <div className="content-wrapper">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="portfolio" element={<Projects />} />
                  <Route path="portfolio/:id" element={<ProjectDetails />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="blog" element={<Blog />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <p
                style={{
                  textAlign: 'center',
                  padding: '20px',
                }}
              >
                &copy; Emil Kovacevic {getCurrentYear()}
              </p>
            </Application>
          </AppWrapper>
        </BrowserRouter>
      </DataProvider>
    </ThemeProvider>
  )
}

export default App
