import { Dispatch, SetStateAction } from 'react'
import { BsMoon, BsLayoutTextSidebarReverse } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import NavBarOptions from './navbarOptions_styles'

type Props = {
  optionsOn: string
  navPos: boolean
  setNavPos: Dispatch<SetStateAction<boolean>>
  setOptionsOn: Dispatch<
    SetStateAction<'animate-out' | 'hidden' | 'animate-in'>
  >
  theme: string
  handleThemeSwitch: () => void
}

function NavbarOptions({
  optionsOn,
  setOptionsOn,
  theme,
  navPos,
  setNavPos,
  handleThemeSwitch,
}: Props) {
  const handleClick = () => {
    handleThemeSwitch()
  }

  function handleNavPosition() {
    setOptionsOn('animate-out')
    setNavPos((prev) => !prev)
  }

  return (
    <NavBarOptions position={navPos}>
      <div className={`navbarOptions ${optionsOn}`}>
        <button onClick={() => handleClick()} type="button">
          {theme === 'light-theme' ? (
            <BsMoon />
          ) : (
            <FiSun style={{ color: 'black' }} />
          )}
        </button>
        <button
          className="layout-button"
          onClick={() => handleNavPosition()}
          type="button"
        >
          <BsLayoutTextSidebarReverse style={{ color: 'black' }} />
        </button>
      </div>
    </NavBarOptions>
  )
}

export default NavbarOptions
