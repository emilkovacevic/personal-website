import { useState, useEffect } from 'react'

const useThemeSwitcher = () => {
  const [theme, setTheme] = useState('')

  const handleThemeSwitch = () => {
    if (theme === 'dark-theme') {
      localStorage.setItem('theme', 'light-theme')
      setTheme('light-theme')
    } else {
      localStorage.setItem('theme', 'dark-theme')
      setTheme('dark-theme')
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (
      savedTheme === 'dark-theme' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark-theme')
      localStorage.setItem('theme', 'dark-theme')
      document.documentElement.classList.remove('light-theme')
      document.documentElement.classList.add('dark-theme')
    } else {
      setTheme('light-theme')
      localStorage.setItem('theme', 'light-theme')
      document.documentElement.classList.remove('dark-theme')
      document.documentElement.classList.add('light-theme')
    }
  }, [theme])

  return { theme, handleThemeSwitch }
}
export default useThemeSwitcher
