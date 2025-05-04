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

/**
 * Edit icon.
 * @param style Tailwind style classes to be applied. Uses stroke for color.
 */
export function EditIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <g fill="none" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
      </g>
    </svg>
  )
}

/**
 * Sort icon.
 * @param style Tailwind style classes to be applied. Uses stroke for color.
 */
export function SortIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="none" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3"></path>
    </svg>
  )
}

/**
 * Sort Ascending icon.
 * @param style Tailwind style classes to be applied. Uses fill for color.
 */
export function SortAscIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="inherit" d="m7.293 8.293l3.995-4a1 1 0 0 1 1.32-.084l.094.083l4.006 4a1 1 0 0 1-1.32 1.499l-.094-.083l-2.293-2.291v11.584a1 1 0 0 1-.883.993L12 20a1 1 0 0 1-.993-.884L11 19.001V7.41L8.707 9.707a1 1 0 0 1-1.32.084l-.094-.084a1 1 0 0 1-.084-1.32zl3.995-4z"></path>
    </svg>
  )
}

/**
 * Sort Descending icon.
 * @param style Tailwind style classes to be applied. Uses fill for color.
 */
export function SortDescIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="inherit" d="M11.883 4.01L12 4.005a1 1 0 0 1 .993.883l.007.117v11.584l2.293-2.294a1 1 0 0 1 1.32-.084l.094.083a1 1 0 0 1 .084 1.32l-.084.095l-3.996 4a1 1 0 0 1-1.32.083l-.094-.083l-4.004-4a1 1 0 0 1 1.32-1.498l.094.083L11 16.583V5.004a1 1 0 0 1 .883-.992L12 4.004z"></path>
    </svg>
  )
}

/**
 * Plus icon.
 * @param style Tailwind style classes to be applied. Uses stroke for color.
 */
export function PlusIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="none" stroke="inherit" strokeLinecap="round" strokeWidth={2} d="M12 20v-8m0 0V4m0 8h8m-8 0H4"></path>
    </svg>
  )
}

/**
 * Copy icon.
 * @param style Tailwind style classes to be applied. Uses stroke for color.
 */
export function CopyIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <g fill="none" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
        <path d="M7 9.667A2.667 2.667 0 0 1 9.667 7h8.666A2.667 2.667 0 0 1 21 9.667v8.666A2.667 2.667 0 0 1 18.333 21H9.667A2.667 2.667 0 0 1 7 18.333z"></path>
        <path d="M4.012 16.737A2 2 0 0 1 3 15V5c0-1.1.9-2 2-2h10c.75 0 1.158.385 1.5 1"></path>
      </g>
    </svg>
  )
}

/**
 * Link icon.
 * @param style Tailwind style classes to be applied. Uses fill for color.
 */
export function LinkIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="inherit" d="M11 17H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17z"></path>
    </svg>
  )
}

/**
 * Description icon.
 * @param style Tailwind style classes to be applied. Uses stroke for color.
 */
export function DescriptionIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="none" stroke="inherit" strokeLinecap="round" strokeWidth={1.5} d="M2.75 5.25h18.5M2.75 12h18.5m-18.5 6.75h13.5"></path>
    </svg>
  )
}

/**
 * Checkmark icon.
 * @param style Tailwind style classes to be applied. Uses fill for color.
 */
export function CheckmarkIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="inherit" d="m8.5 16.586l-3.793-3.793a1 1 0 0 0-1.414 1.414l4.5 4.5a1 1 0 0 0 1.414 0l11-11a1 1 0 0 0-1.414-1.414z"></path>
    </svg>
  )
}

/**
 * Export icon.
 * @param style Tailwind style classes to be applied. Uses fill for color.
 */
export function ExportIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="inherit" d="M8.71 7.71L11 5.41V15a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42M21 14a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 0-2 0v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1"></path>
    </svg>
  )
}

/**
 * Import icon.
 * @param style Tailwind style classes to be applied. Uses fill for color.
 */
export function ImportIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="inherit" d="M21 14a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 0-2 0v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1m-9.71 1.71a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21l4-4a1 1 0 0 0-1.42-1.42L13 12.59V3a1 1 0 0 0-2 0v9.59l-2.29-2.3a1 1 0 1 0-1.42 1.42Z"></path>
    </svg>
  )
}



//////////////////////////// LIST ICONS BELOW ////////////////////////////

/**
 * Music icon.
 * @param style Tailwind style classes to be applied. Uses stroke for color.
 */
export function MusicIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="none" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 18a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 0V6.333L18 4v11.667M8 10.333L18 8m0 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></path>
    </svg>
  )
}

/**
 * Wrench icon.
 * @param style Tailwind style classes to be applied. Uses stroke for color.
 */
export function WrenchIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="none" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.917 7.076a.947.947 0 0 1 0 1.326L8.402 9.917a.947.947 0 0 1-1.326 0L4.528 7.37c-.495-.494-1.327-.333-1.446.356a5.682 5.682 0 0 0 6.626 6.554c.82-.15 1.707-.022 2.296.566l5.566 5.567a2.01 2.01 0 1 0 2.842-2.842l-5.567-5.566c-.588-.589-.716-1.477-.566-2.296a5.684 5.684 0 0 0-6.554-6.626c-.689.12-.85.951-.356 1.446z"></path>
    </svg>
  )
}

/**
 * Game icon.
 * @param style Tailwind style classes to be applied. Uses fill for color.
 */
export function GameIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="inherit" d="M11 17.33V20h2v-2.67l-1-1zm2-10.66V4h-2v2.67l1 1zM16.33 12l1 1H20v-2h-2.67zM4 11v2h2.67l1-1l-1-1z" opacity={0.3}></path>
      <path fill="inherit" d="M2 9v6h5.5l3-3l-3-3zm4.67 4H4v-2h2.67l1 1zM22 9h-5.5l-3 3l3 3H22zm-2 4h-2.67l-1-1l1-1H20zm-5 3.5l-3-3l-3 3V22h6zM13 20h-2v-2.67l1-1l1 1zM9 7.5l3 3l3-3V2H9zM11 4h2v2.67l-1 1l-1-1z"></path>
    </svg>
  )
}

/**
 * Controller icon.
 * @param style Tailwind style classes to be applied. Uses stroke for color.
 */
export function ControllerIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="none" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 11.5v3M6 13h3m3-4.653c2.005 0 3.7-1.888 5.786-1.212c2.264.733 3.82 3.413 3.708 9.492c-.022 1.224-.336 2.578-1.546 3.106c-2.797 1.221-4.397-2.328-7-2.328h-1.897c-2.605 0-4.213 3.545-6.998 2.328c-1.21-.528-1.525-1.882-1.547-3.107c-.113-6.078 1.444-8.758 3.708-9.491C8.299 6.459 9.994 8.347 12 8.347m0-4.565v4.342M14.874 13h3"></path>
    </svg>
  )
}

/**
 * Utensil icon.
 * @param style Tailwind style classes to be applied. Uses fill for color.
 */
export function UtensilIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="inherit" d="M3.193 3.726A1.89 1.89 0 0 1 5.085 2c.45 0 .866.156 1.193.417A2 2 0 0 1 7.5 2c.46 0 .884.155 1.222.417A1.9 1.9 0 0 1 9.915 2c.976 0 1.807.737 1.892 1.726c.084.975.193 2.483.193 3.774a4.5 4.5 0 0 1-2.176 3.854c-.222.134-.28.3-.274.386c.127 1.934.45 6.952.45 7.757a2.5 2.5 0 0 1-5 0c0-.805.323-5.823.45-7.757c.005-.087-.052-.252-.274-.386A4.5 4.5 0 0 1 3 7.5c0-1.29.109-2.799.193-3.774M9.5 7.25a.75.75 0 0 1-1.5 0V4a.5.5 0 0 0-1 0v3.25a.75.75 0 0 1-1.5 0V3.915a.415.415 0 0 0-.415-.415a.393.393 0 0 0-.398.355C4.604 4.82 4.5 6.275 4.5 7.5c0 1.09.58 2.044 1.452 2.57c.545.33 1.047.96.995 1.768c-.13 1.98-.447 6.918-.447 7.66a1 1 0 1 0 2 0c0-.742-.317-5.68-.447-7.66c-.052-.808.45-1.438.995-1.768A3 3 0 0 0 10.5 7.5c0-1.224-.104-2.68-.187-3.645a.393.393 0 0 0-.398-.355a.415.415 0 0 0-.415.415zm3.5.5A5.75 5.75 0 0 1 18.75 2a.75.75 0 0 1 .75.75v8.5c0 .318.106 1.895.225 3.642l.005.083c.13 1.908.27 3.983.27 4.522a2.5 2.5 0 0 1-5 0c0-.514.128-2.611.252-4.534c.062-.971.125-1.912.172-2.61l.023-.353h-.697A1.75 1.75 0 0 1 13 10.25zm3.998 3.552l-.021.314a798 798 0 0 0-.229 3.444c-.126 1.96-.248 3.986-.248 4.437a1 1 0 1 0 2 0c0-.48-.138-2.526-.272-4.504l-.007-.104C18.108 13.23 18 11.627 18 11.25V3.566a4.25 4.25 0 0 0-3.5 4.184v2.5c0 .138.112.25.25.25h1.5a.75.75 0 0 1 .748.802"></path>
    </svg>
  )
}

/**
 * Lightbulb icon.
 * @param style Tailwind style classes to be applied. Uses stroke for color.
 */
export function LightbulbIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="none" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"></path>
    </svg>
  )
}

/**
 * Internet icon.
 * @param style Tailwind style classes to be applied. Uses fill for color.
 */
export function InternetIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="inherit" d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></path>
    </svg>
  )
}

/**
 * Clipboard icon.
 * @param style Tailwind style classes to be applied. Uses stroke for color.
 */
export function ClipboardIcon({style}: IconProps) {
  return (
    <svg className={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path fill="none" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0q.083.292.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0q.002-.32.084-.612m7.332 0q.969.073 1.927.184c1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48 48 0 0 1 1.927-.184"></path>
    </svg>
  )
}