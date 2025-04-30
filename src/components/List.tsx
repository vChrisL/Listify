import { Link } from "react-router-dom"
import { ListObject } from "../types/ListType"
import { tryGetIcon } from "../util/ListIconUtil"
import { tryGetColor } from "../util/ColorUtil"

/**
 * List shortcut component for sidebar navigation.
 */
export function ListShortcut({listObj}: {listObj: ListObject}) {
  return (
    <button className="flex flex-row gap-2 items-center w-full rounded-lg p-2" style={{backgroundColor: `${listObj.color}`}}>
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
    <Link to={`/list/${listObj.id}`}>
      <button className={"flex flex-col gap-2 items-center justify-center py-12 px-2 bg-tertiary-bg rounded-lg w-34 h-52 lg:w-40"} style={{backgroundColor: tryGetColor(listObj.color)}}>
        {tryGetIcon(listObj.icon)}
        <h3 className="truncate max-w-full">{listObj.name}</h3>
      </button>
    </Link>
  )
}