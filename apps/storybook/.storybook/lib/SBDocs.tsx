import { Canvas, Controls, Description, DocsContainer, type DocsContainerProps, Title } from '@storybook/blocks'
import { type ThemeVars } from '@storybook/theming'
import { useState, useEffect } from 'react'
import { SBTheme } from './SBTheme'

export const SBDocsContainer = ({ context, ...props }: DocsContainerProps) => {
  const KEY = 'sb-addon-themes-3'
  const getTheme = (val: unknown): ThemeVars => {
    const current = JSON.parse(val as string).current
    return current === 'dark' ? SBTheme.dark : SBTheme.light
  }
  const [theme, setTheme] = useState(getTheme(localStorage.getItem(KEY)))

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === KEY && event.newValue) {
        setTheme(getTheme(event.newValue))
      }
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return (
    <DocsContainer
      {...props}
      context={context}
      theme={theme}
    />
  )
}

export const SBDocs = {
  container: SBDocsContainer,
  page: () => (
    <>
      <Title />
      <Description />
      <Canvas />
      <Controls />
    </>
  ),
}
