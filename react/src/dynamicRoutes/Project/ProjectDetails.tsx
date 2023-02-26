import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { DataContext } from '../../context/dataContext/dataContext'

const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0;

  img {
    width: 100%;
    height: auto;
  }
  h1 {
    margin: 1rem 0;
  }

  div {
    padding: 20px;
    background-color: #f7f7f7;
  }

  div div {
    display: flex;
    justify-content: space-between;
  }
  p {
    line-height: 1.5;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  a {
    margin-left: 10px;
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  a:hover {
    background-color: #0069d9;
  }
`

function ProjectDetails() {
  const { data, isError, loading } = useContext(DataContext)
  const params = useParams()
  const { id } = params
  const projectId = parseInt(id || '', 10)

  if (loading) return <div>Loading...</div>

  if (isError) return <div>Error</div>

  return (
    <Main>
      {data?.projects?.map((project) => {
        if (project?.id === projectId) {
          return (
            <div key={project.id}>
              <h1>{project.name}</h1>
              <img src={project.image} alt={project.name} />
              <div>
                <p>{project.description}</p>
              </div>
              <div>
                <h3>Tools:</h3>
                <ul>
                  {project.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
                <div className="buttons">
                  <a href={project.live_link} target="_blank" rel="noreferrer">
                    Live Link
                  </a>
                  <a href={project.code_link} target="_blank" rel="noreferrer">
                    Code Link
                  </a>
                </div>
              </div>
            </div>
          )
        }
        return null
      })}
    </Main>
  )
}

export default ProjectDetails
