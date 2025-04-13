import { ReactNode } from "react";
import { DashboardIcon } from "../util/Icons";

export const ColorMap: Map<string, string> = new Map([
  ["blue",    "#688CDA"],
  ["teal",    "#6BD4DB"],
  ["green",   "#72C993"],
  ["purple",  "#A676D0"],
  ["red",     "#D07676"],
  ["pink",    "#D076BD"],
  ["orange",  "#D09976"],
  ["yellow",  "#DDBC62"],
]);

type ListItem = {
  id:     number,
  title:  string,
  desc:   string,
  url?:   string
};

type ListObject = {
  color:  string,
  icon:   ReactNode,
  // id:     number,
  name:   string,
  // items:  ListItem
};

/**
 * List shortcut component for sidebar navigation.
 */
export function ListShortcut({listObj}: {listObj: ListObject}) {
  return (
    <button className="flex flex-row gap-2 items-center w-full rounded-lg p-2" style={{backgroundColor: `${listObj.color}`}}>
      {/* <DashboardIcon style="w-8 h-8 min-w-8  stroke-text-color"/> */}
      {listObj.icon}
      <h3 className="grow text-left truncate">{listObj.name}</h3>
    </button>
  )
}

/**
 * List card component.
 */
export function ListCard({listObj}: {listObj: ListObject}) {
  return (
    <button className={"flex flex-col gap-2 items-center justify-center py-12 px-2 bg-tertiary-bg rounded-lg"}>
      {/* <DashboardIcon style={"w-12 h-12 stroke-text-color"}/> */}
      {listObj.icon}
      <h3>{listObj.name}</h3>
    </button>
  )
}