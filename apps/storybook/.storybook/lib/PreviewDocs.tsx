import { useState, useEffect } from 'react'
import {
  DocsContainer,
  DocsContainerProps,
  Title,
  Subtitle,
  Description,
  Controls,
  Stories,
  Canvas,
} from '@storybook/blocks'
import { PreviewTheme } from '@sb/lib'
import { ThemeVars } from '@storybook/theming'
import '@sb/assets/docs.scss'

const DocThemedContainer = (props: DocsContainerProps) => {
  const KEY = 'sb-addon-themes-3'

  const getTheme = (val: unknown): ThemeVars => {
    const current = JSON.parse(val as string).current
    return current === 'dark' ? PreviewTheme.dark : PreviewTheme.light
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
      context={props.context}
      theme={theme}
    />
  )
}

export const PreviewDocs = {
  container: DocThemedContainer,
  page: () => (
    <>
      <Title />
      <Subtitle />
      <Description />
      <Canvas />
      <Controls />
      <Stories />
    </>
  ),
}
