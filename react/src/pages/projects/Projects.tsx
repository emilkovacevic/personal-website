import { useState, MouseEvent, useContext } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import { DataContext } from '../../context/dataContext/dataContext'

import Card from '../../components/card/Card'
import Headline from '../../components/headline/Headline'
import Main from './projects_styles'
import ErrorCard from '../../components/error/ErrorCard'
import LoadingAnimation from '../../components/loading/LoadingAnimation'

function Portfolio() {
  const { data, isError, loading } = useContext(DataContext)

  const [navItem, setNavItem] = useState('All Projects')

  const handleNavClick = (e: MouseEvent<HTMLButtonElement>) => {
    setNavItem(e.currentTarget.innerText)
  }

  if (isError) return <ErrorCard error="Server Error" />

  return (
    <Main>
      <Headline title="my portfolio" />
      <div>
        {loading ? (
          <LoadingAnimation />
        ) : (
          <Tabs>
            <TabList>
              <div className="nav">
                <Tab>
                  <button
                    className={`${
                      navItem === 'All Projects' ? 'active' : ''
                    } nav-item`}
                    type="button"
                    onClick={handleNavClick}
                  >
                    <span>All Projects</span>
                  </button>
                </Tab>
                <Tab>
                  <button
                    className={`${
                      navItem === 'Web Development' ? 'active' : ''
                    } nav-item`}
                    type="button"
                    onClick={handleNavClick}
                  >
                    <span>Web Development</span>
                  </button>
                </Tab>
                <Tab>
                  <button
                    className={`${
                      navItem === '3D & Animation' ? 'active' : ''
                    } nav-item`}
                    type="button"
                    onClick={handleNavClick}
                  >
                    <span>3D & Animation</span>
                  </button>
                </Tab>
              </div>
            </TabList>
            <div>
              <TabPanel>
                <div className="projects">
                  {data?.projects?.map((project) => (
                    <Card
                      id={project.id}
                      key={project.id}
                      title={project.name}
                      link={project.live_link}
                      code={project.code_link}
                      image={project.image}
                    />
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="projects">
                  {data?.projects?.map((project) => {
                    if (project.type === 'web') {
                      return (
                        <Card
                          id={project.id}
                          key={project.id}
                          title={project.name}
                          link={project.live_link}
                          code={project.code_link}
                          image={project.image}
                        />
                      )
                    }
                    return null
                  })}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="projects">
                  {data?.projects?.map((project) => {
                    if (project.type === '3d') {
                      return (
                        <Card
                          id={project.id}
                          key={project.id}
                          title={project.name}
                          link={project.live_link}
                          code={project.code_link}
                          image={project.image}
                        />
                      )
                    }
                    return null
                  })}
                </div>
              </TabPanel>
            </div>
          </Tabs>
        )}
      </div>
    </Main>
  )
}

export default Portfolio
