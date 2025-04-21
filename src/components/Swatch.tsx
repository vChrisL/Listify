import { ReactNode, useState } from "react";

type SwatchProps = {
  children: ReactNode,
  style: string,
  bgColor?: string,
  selected: boolean,
  onClickEvt: () => void
};

export function Swatch({children, style, bgColor, selected, onClickEvt}: SwatchProps) {
  return (
    <button onClick={onClickEvt} className={`${style} ${selected ? 'border-green-300' : 'border-transparent'}`} style={{backgroundColor: bgColor}}>{children}</button>
  )
}