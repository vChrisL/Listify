interface IconProps {
  style: string
}

/**
 * Book icon.
 * @param style Tailwind style classes to be applied. Uses stroke for color.
 */
export function BookIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="none" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6v13m9-13v13m9-13v13"></path>
    </svg>
  )
}

/**
 * Dashboard icon.
 * @param style Tailwind style classes to be applied. Uses stroke for color.
 */
export function DashboardIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="none" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M6.625 2.75a3.875 3.875 0 1 0 0 7.75a3.875 3.875 0 0 0 0-7.75m10.75 0a3.875 3.875 0 1 0 0 7.75a3.875 3.875 0 0 0 0-7.75M6.625 13.5a3.875 3.875 0 1 0 0 7.75a3.875 3.875 0 0 0 0-7.75m10.75 0a3.875 3.875 0 1 0 0 7.75a3.875 3.875 0 0 0 0-7.75"></path>
    </svg>
  )
}

/**
 * Hamburger menu icon.
 * @param style Tailwind style classes to be applied. Uses stroke for color.
 */
export function MenuIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="none" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M5 17h14M5 12h14M5 7h14"></path>
    </svg>
  )
}