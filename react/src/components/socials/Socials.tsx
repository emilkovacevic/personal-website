import styled from 'styled-components'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'

const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  li {
    a {
      text-decoration: none;
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      color: ${(props) => props.theme.text_primary};
      background-color: ${(props) => props.theme.secondary};
      :hover {
        scale: 1.1;
      }
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    position: relative;
    margin: 0;
    .h-line {
      ::before {
        position: absolute;
        content: '';
        display: inline-block;
        width: 20%;
        left: 27.5%;
        top: 50%;
        height: 1px;
        background: red;
      }
      ::after {
        position: absolute;
        content: '';
        display: inline-block;
        width: 20%;
        right: 25.5%;
        top: 50%;
        height: 1px;
        background: red;
      }
    }
    li {
      a {
        text-decoration: none;
        font-size: 1.5rem;
        color: ${(props) => props.theme.text_primary};
        background-color: ${(props) => props.theme.secondary};
        :hover {
          scale: 1.1;
        }
      }
    }
  }
`

function Socials() {
  return (
    <List>
      <li>
        <a
          href="https://github.com/emilkovacevic"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
          <span>GitHub</span>
        </a>
      </li>
      <li className="h-line">
        <a
          href="https://www.linkedin.com/in/emil-kovacevic-77131a250/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
          <span>LinkeIn</span>
        </a>
      </li>
      <li>
        <a href="mailto:emil.kovacevic.dev@gmail.com">
          <GoMail />
          <span>Mail</span>
        </a>
      </li>
    </List>
  )
}

export default Socials
