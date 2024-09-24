import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Theme } from '@/types'

interface State {
  sidebarOpen: boolean
  theme: Theme
  toggleTheme: () => void
  toggleSidebar: () => void
}

export const useStore = create(
  persist<State>(set => (
    {
      sidebarOpen: true,
      theme: Theme.DARK,
      toggleTheme: () => set((state: { theme: Theme }) => ({
        theme: state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
      })),
      toggleSidebar: () => set(state => ({ sidebarOpen: !state.sidebarOpen })),
    }),
  { name: 'theme' },
  ),
)
