import { create } from "zustand"

interface MenuStore {
  isDisplayed: boolean,
  setIsDisplayed: (display: boolean) => void
}

/**
 * Zustand store for mobile sidebar
 */
export const useSidebarStore = create<MenuStore>(set => ({
  isDisplayed: false,

  /**
   * Sets a new value for isDisplayed 
   * @param display The new display state
   */
  setIsDisplayed: (display: boolean) => (
    set(() => ({isDisplayed: display}))
  )
}))