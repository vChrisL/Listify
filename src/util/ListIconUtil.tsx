import { ReactNode } from "react";
import { BookIcon, ClipboardIcon, ControllerIcon, GameIcon, InternetIcon, LightbulbIcon, MusicIcon, UtensilIcon, WrenchIcon } from "./Icons";

type IconType = {
  listIcon: ReactNode,
  swatchIcon: ReactNode
};

export const ListIcons: Map<string, IconType> = new Map([
  [
    "music", 
    {
      listIcon: <MusicIcon style="w-12 h-12 stroke-text-color"/>,
      swatchIcon: <MusicIcon style="w-8 h-8 stroke-text-color "/>
    }
  ],
  [
    "wrench", 
    {
      listIcon: <WrenchIcon style="w-12 h-12 stroke-text-color"/>,
      swatchIcon: <WrenchIcon style="w-8 h-8 stroke-text-color "/>
    }
  ],
  [
    "game", 
    {
      listIcon: <GameIcon style="w-12 h-12 fill-text-color"/>,
      swatchIcon: <GameIcon style="w-8 h-8 fill-text-color "/>
    }
  ],
  [
    "controller", 
    {
      listIcon: <ControllerIcon style="w-12 h-12 stroke-text-color"/>,
      swatchIcon: <ControllerIcon style="w-8 h-8 stroke-text-color "/>
    }
  ],
  [
    "utensil", 
    {
      listIcon: <UtensilIcon style="w-12 h-12 fill-text-color"/>,
      swatchIcon: <UtensilIcon style="w-8 h-8 fill-text-color "/>
    }
  ],
  [
    "lightbulb", 
    {
      listIcon: <LightbulbIcon style="w-12 h-12 stroke-text-color"/>,
      swatchIcon: <LightbulbIcon style="w-8 h-8 stroke-text-color "/>
    }
  ],
  [
    "book", 
    {
      listIcon: <BookIcon style="w-12 h-12 stroke-text-color"/>,
      swatchIcon: <BookIcon style="w-8 h-8 stroke-text-color "/>
    }
  ],
  [
    "internet", 
    {
      listIcon: <InternetIcon style="w-12 h-12 fill-text-color"/>,
      swatchIcon: <InternetIcon style="w-8 h-8 fill-text-color "/>
    }
  ],
  [
    "clipboard", 
    {
      listIcon: <ClipboardIcon style="w-12 h-12 stroke-text-color"/>,
      swatchIcon: <ClipboardIcon style="w-8 h-8 stroke-text-color "/>
    }
  ],
]);

/**
 * Get Icon Component based upon it's name.
 * @param name  The icon name
 * @returns Returns the corresponding Icon element
 */
export function tryGetIcon(name: string) {
  return ListIcons.get(name)?.listIcon ?? <></>
}