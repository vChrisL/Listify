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

/**
 * Hamburger menu icon.
 * @param style Tailwind style classes to be applied. Uses stroke for color.
 */
export function AddIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="none" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m-7-7h14"></path>
    </svg>
  )
}

/**
 * Search icon.
 * @param style Tailwind style classes to be applied. Uses fill for color.
 */
export function SearchIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="inherit" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"></path>
    </svg>
  )
}