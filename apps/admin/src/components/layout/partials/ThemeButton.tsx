import { useStore } from '@/app'
import { Theme } from '@/types'
import { Button } from '@fuu/ui'
import { Sun, Moon } from '@phosphor-icons/react'
import { useEffect } from 'react'

const setTheme = (theme: Theme) => {
  const root = window.document.documentElement
  root.classList.remove(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
  root.classList.add(theme)
}

export function ThemeButton() {
  const theme = useStore(state => state.theme)
  const toggle = useStore(state => state.toggleTheme)
  useEffect(() => setTheme(theme), [theme])
  return (
    <Button icon="only" color="ghost" onClick={toggle}>
      {theme === Theme.DARK ? <Moon /> : <Sun />}
    </Button>
  )
}
