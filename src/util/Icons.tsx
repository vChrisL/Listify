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

/**
 * Title icon.
 * @param style Tailwind style classes to be applied. Uses fill for color.
 */
export function TitleIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="inherit" d="M11.385 19V6.25H6.019V5H18v1.25h-5.365V19z"></path>
    </svg>
  )
}

/**
 * Image icon.
 * @param style Tailwind style classes to be applied. Uses fill for color.
 */
export function ImageIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="inherit" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm1-2h12l-3.75-5l-3 4L9 13zm-1 2V5z"></path>
    </svg>
  )
}

/**
 * Paint Bucket icon.
 * @param style Tailwind style classes to be applied. Uses fill for color.
 */
export function PaintBucketIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="inherit" d="M20 14c-.092.064-2 2.083-2 3.5c0 1.494.949 2.448 2 2.5c.906.044 2-.891 2-2.5c0-1.5-1.908-3.436-2-3.5M9.586 20c.378.378.88.586 1.414.586s1.036-.208 1.414-.586l7-7l-.707-.707L11 4.586L8.707 2.293L7.293 3.707L9.586 6L4 11.586c-.378.378-.586.88-.586 1.414s.208 1.036.586 1.414zM11 7.414L16.586 13H5.414z"></path>
    </svg>
  )
}