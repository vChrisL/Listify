import { ReactNode } from "react";
import { BookIcon, ClipboardIcon, ControllerIcon, GameIcon, InternetIcon, LightbulbIcon, MusicIcon, UtensilIcon, WrenchIcon } from "./Icons";

// export const ListIcons: ReactNode[] = [
//   <MusicIcon      style="w-8 h-8 stroke-text-color lg:w-12 lg:h-12"/>,
//   <WrenchIcon     style="w-8 h-8 stroke-text-color lg:w-12 lg:h-12"/>,
//   <GameIcon       style="w-8 h-8 fill-text-color lg:w-12 lg:h-12"/>,
//   <ControllerIcon style="w-8 h-8 stroke-text-color lg:w-12 lg:h-12"/>,
//   <UtensilIcon    style="w-8 h-8 fill-text-color lg:w-12 lg:h-12"/>,
//   <LightbulbIcon  style="w-8 h-8 stroke-text-color lg:w-12 lg:h-12"/>,
//   <BookIcon       style="w-8 h-8 stroke-text-color lg:w-12 lg:h-12"/>,
//   <InternetIcon   style="w-8 h-8 fill-text-color lg:w-12 lg:h-12"/>,
//   <ClipboardIcon  style="w-8 h-8 stroke-text-color lg:w-12 lg:h-12"/>,
// ];

type IconType = {
  listIcon: ReactNode,
  swatchIcon: ReactNode
};

export const ListIcons: Map<string, IconType> = new Map([
  [
    "music", 
    {
      listIcon: <MusicIcon style="w-12 h-12 stroke-text-color"/>,
      swatchIcon: <MusicIcon style="w-8 h-8 stroke-text-color lg:w-12 lg:h-12"/>
    }
  ],
  [
    "wrench", 
    {
      listIcon: <WrenchIcon style="w-12 h-12 stroke-text-color"/>,
      swatchIcon: <WrenchIcon style="w-8 h-8 stroke-text-color lg:w-12 lg:h-12"/>
    }
  ],
  [
    "game", 
    {
      listIcon: <GameIcon style="w-12 h-12 fill-text-color"/>,
      swatchIcon: <GameIcon style="w-8 h-8 fill-text-color lg:w-12 lg:h-12"/>
    }
  ],
  [
    "controller", 
    {
      listIcon: <ControllerIcon style="w-12 h-12 stroke-text-color"/>,
      swatchIcon: <ControllerIcon style="w-8 h-8 stroke-text-color lg:w-12 lg:h-12"/>
    }
  ],
  [
    "utensil", 
    {
      listIcon: <UtensilIcon style="w-12 h-12 fill-text-color"/>,
      swatchIcon: <UtensilIcon style="w-8 h-8 fill-text-color lg:w-12 lg:h-12"/>
    }
  ],
  [
    "lightbulb", 
    {
      listIcon: <LightbulbIcon style="w-12 h-12 stroke-text-color"/>,
      swatchIcon: <LightbulbIcon style="w-8 h-8 stroke-text-color lg:w-12 lg:h-12"/>
    }
  ],
  [
    "book", 
    {
      listIcon: <BookIcon style="w-12 h-12 stroke-text-color"/>,
      swatchIcon: <BookIcon style="w-8 h-8 stroke-text-color lg:w-12 lg:h-12"/>
    }
  ],
  [
    "internet", 
    {
      listIcon: <InternetIcon style="w-12 h-12 fill-text-color"/>,
      swatchIcon: <InternetIcon style="w-8 h-8 fill-text-color lg:w-12 lg:h-12"/>
    }
  ],
  [
    "clipboard", 
    {
      listIcon: <ClipboardIcon style="w-12 h-12 stroke-text-color"/>,
      swatchIcon: <ClipboardIcon style="w-8 h-8 stroke-text-color lg:w-12 lg:h-12"/>
    }
  ],
]);

export function tryGetIcon(name: string) {
  return ListIcons.get(name)?.listIcon ?? <></>
}