import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'react-lazy-load-image-component/src/effects/opacity.css'

import styled from 'styled-components'
import { GoMarkGithub } from 'react-icons/go'
import { AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Article = styled.article`
  transform: translateX(0);
  animation: fadeIn 1s ease-in-out;
  margin: 50px auto;
  min-width: 250px;
  max-width: 350px;
  max-height: 380px;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.card__border};
  overflow: hidden;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: all 0.25s ease;
  :hover,
  :focus {
    box-shadow: 2px 5px 10px ${(props) => props.theme.card__background__shadow};
  }
  .content h2 a {
    font-size: 1.5rem;
    text-shadow: 2px 2px black;
    color: ${(props) => props.theme.card__button__text};
    text-decoration: none;
    :hover,
    :focus {
      color: ${(props) => props.theme.card__button__text__hover};
      text-decoration: underline;
    }
  }

  :hover img,
  :focus img {
    transform: scale(1.5);
  }
  :hover ul,
  :focus ul {
    transform: translate(0);
    opacity: 1;
  }
  :after {
    width: 100%;
    content: '';
    left: 0;
    bottom: 0;
    height: 150px;
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    z-index: 20;
    transition: all 0.25s ease;
  }
  .img * {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 10;
    transition: all 0.25s ease;
  }
  .content {
    z-index: 30;
    position: absolute;
    bottom: 0;
    color: ${(props) => props.theme.card__button__text};
    padding: 20px;
    padding-bottom: 40px;
  }
  ul {
    position: absolute;
    right: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 40;
    border-radius: 15px;
    padding-left: 0;
    padding-top: 8px;
    padding-bottom: 8px;
    top: 0;
    opacity: 0;
    transform: translate(100%);
    transition: all 0.25s ease;
  }
  ul li {
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    width: 50px;
    height: 50px;
    background: ${(props) => props.theme.card__background__link};

    list-style: none;
    transition: all 0.25s ease;
  }
  ul li:last-child {
    border-radius: 0 0 10px 10px;
  }
  ul li:first-child {
    border-radius: 10px 10px 0 0;
  }
  ul li:hover,
  ul li:focus {
    opacity: 1;
    transform: translate(-7px, -4px);
    border-radius: 6px;
    background-color: ${(props) => props.theme.card__background__link__hover};
  }
  ul li a {
    font-size: 1rem;
    color: ${(props) => props.theme.card__button__text};
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`

type Props = {
  title: string
  link: string
  code?: string
  image: string
}

function Card({ title, link, code, image }: Props) {
  return (
    <Article className="card" tabIndex={0}>
      <ul>
        {code && (
          <li>
            <a href={code} target="_blank" rel="noopener noreferrer">
              <GoMarkGithub />
            </a>
          </li>
        )}
        <li>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <AiOutlineEye />
          </a>
        </li>
      </ul>

      <div className="img">
        <LazyLoadImage
          src={image}
          alt={title}
          height={380}
          width={450}
          style={{ objectFit: 'cover' }}
          placeholderSrc="/images/tempImg.png"
        />
      </div>

      <div className="content">
        <h2>
          <Link to={title} target="_blank" rel="noopener noreferrer">
            {title}
          </Link>
        </h2>
      </div>
    </Article>
  )
}
Card.defaultProps = {
  code: null,
}
export default Card
