import { Link, useLocation } from 'react-router-dom'
import { BsGear, BsHouse } from 'react-icons/bs'
import { IoPersonOutline, IoMailOpenOutline } from 'react-icons/io5'
import { GrClose } from 'react-icons/gr'
import { RiSuitcaseLine } from 'react-icons/ri'
import { ImBlog } from 'react-icons/im'
import { useEffect, useRef, useState } from 'react'
import Nav from './navbar_styles'
import NavbarOptions from './navbarOptions/NavbarOptions'

type Props = {
  theme: string
  handleThemeSwitch: () => void
}

const navbarRoutes = [
  { name: 'Home', path: '/', icon: BsHouse },
  { name: 'About', path: '/about', icon: IoPersonOutline },
  { name: 'Portfolio', path: '/portfolio', icon: RiSuitcaseLine },
  { name: 'Contact', path: '/contact', icon: IoMailOpenOutline },
  { name: 'Blog', path: '/blog', icon: ImBlog },
]

function Navbar({ theme, handleThemeSwitch }: Props) {
  const [optionsOn, setOptionsOn] = useState<
    'hidden' | 'animate-in' | 'animate-out'
  >('hidden')
  const currentRoute = useLocation().pathname
  const optionsRef = useRef<HTMLDivElement>(null)
  const [navPos, setNavPos] = useState(false)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(e.target as Node)
      ) {
        setOptionsOn('animate-out')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside) // cleanup function
  }, [optionsRef])

  return (
    <Nav
      position={navPos}
      style={{ ...(navPos ? { left: '0' } : { right: '0' }) }}
    >
      <div className="nav_routes" ref={optionsRef}>
        {navbarRoutes.map((route) => (
          <Link
            area-label={route.name}
            to={route.path}
            key={route.name}
            onClick={() =>
              setOptionsOn((prev) =>
                prev === 'animate-in' ? 'animate-out' : 'hidden'
              )
            }
            className={`tooltip ${currentRoute === route.path ? 'active' : ''}`}
          >
            <route.icon />
            <span className="tooltiptext">{route.name}</span>
            <span className="visually-hidden">Navigate to {route.name}</span>
          </Link>
        ))}
        <div className="nav_settings">
          {optionsOn !== 'hidden' && (
            <NavbarOptions
              navPos={navPos}
              setNavPos={setNavPos}
              optionsOn={optionsOn}
              setOptionsOn={setOptionsOn}
              theme={theme}
              handleThemeSwitch={handleThemeSwitch}
            />
          )}

          <button
            type="button"
            aria-label="Open settings"
            className="button tooltip"
            onClick={() =>
              setOptionsOn(
                optionsOn === 'animate-in' ? 'animate-out' : 'animate-in'
              )
            }
          >
            {optionsOn === 'hidden' || optionsOn === 'animate-out' ? (
              <BsGear />
            ) : (
              <GrClose />
            )}
            <span className="tooltiptext">Settings</span>
            <span className="visually-hidden">Open settings</span>
          </button>
        </div>
      </div>
    </Nav>
  )
}

export default Navbar
