import { ReactNode } from "react";

type SwatchProps = {
  children: ReactNode,
  style: string,
  bgColor?: string,
  selected: boolean,
  onClickEvt: () => void
};

export function Swatch({children, style, bgColor, selected, onClickEvt}: SwatchProps) {  
  return (
    <button type="button" onClick={onClickEvt} className={`${style} ${selected ? 'outline-green-400' : 'outline-transparent'} outline-2 outline-offset-2`} style={{backgroundColor: bgColor}}>
      {children}
    </button>
  )
}