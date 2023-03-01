import { useContext } from 'react'
import styled from 'styled-components'
import ErrorCard from '../../../../components/error/ErrorCard'
import Headline from '../../../../components/headline/Headline'
import LoadingAnimation from '../../../../components/loading/LoadingAnimation'
import { DataContext } from '../../../../context/dataContext/dataContext'

const Table = styled.section`
  table {
    background-color: ${(props) =>
      props.theme.aboutPage__table_color_background};
    color: ${(props) => props.theme.aboutPage__table_color_text};
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    border: 1px solid ${(props) => props.theme.aboutPage__table_color_border};
  }

  th {
    background-color: ${(props) =>
      props.theme.aboutPage__table_color_background};
  }

  .table-key {
    font-weight: bold;
    padding-left: 10px;
    color: ${(props) => props.theme.text_primary};
    text-shadow: ${(props) => props.theme.text_shadow};
  }
  .table-value {
    padding-left: 10px;
  }

  .download {
    text-align: center;
    margin-top: 20px;
    ::before {
      content: 'V';
      display: block;
      color: ${(props) => props.theme.aboutPage__table_color_headline};
      margin-bottom: 10px;
    }
    ::after {
      content: 'V';
      display: block;
      margin-top: 10px;
      color: ${(props) => props.theme.aboutPage__table_color_headline};
      animation: 3s infinite alternate bounce;
    }
  }
  a {
    text-decoration: none;
    display: inline-block;
    color: ${(props) => props.theme.link_color};
    :hover,
    :focus {
      text-decoration: underline;
      color: ${(props) => props.theme.link_color_hover};
    }
  }
  .download a {
    padding: 25px 50px;
    background-color: #4caf50;
    text-align: center;
    font-size: 1.5rem;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    color: white;
  }

  .download a:hover {
    background-color: #3e8e41;
  }

  @media screen and (min-width: 768px) {
    table {
      display: table;
    }
    th,
    td {
      display: table-cell;
    }

    .download {
      margin-top: 5rem;
    }
  }
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`

function Info() {
  const { data, isError, loading } = useContext(DataContext)

  if (loading) {
    return <LoadingAnimation />
  }
  if (isError) {
    return <ErrorCard error="Oooops! Something went wrong" />
  }

  return (
    <Table>
      <Headline title="About Me" />
      <table>
        <tbody>
          <tr>
            <th>
              <span className="table-key">Name:</span>
            </th>
            <td>
              <span className="table-value">{data?.about?.name}</span>
            </td>
            <th>
              <span className="table-key">Surname:</span>
            </th>
            <td>
              <span className="table-value">{data?.about?.surname}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="download">
        <a
          href="https://emil-datahost.vercel.app/cv"
          target="_blank"
          rel="noreferrer"
        >
          Open CV
        </a>
      </div>
    </Table>
  )
}

export default Info
