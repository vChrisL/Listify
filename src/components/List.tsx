import { Link } from "react-router-dom"
import { ListObject } from "../types/ListType"
import { tryGetIcon } from "../util/ListIconUtil"
import { tryGetColor } from "../util/ColorUtil"
import { useSidebarStore } from "../stores/MenuStore"

/**
 * List shortcut component for sidebar navigation.
 */
export function ListShortcut({listObj}: {listObj: ListObject}) {
  const setDisplaySidebar = useSidebarStore(state => state.setIsDisplayed);

  return (
    <Link to={`/list/${listObj.id}`} onClick={() => setDisplaySidebar(false)}>
      <button className="flex flex-row gap-2 items-center w-full rounded-lg p-2" style={{backgroundColor: tryGetColor(listObj.color)}}>
        {tryGetIcon(listObj.icon)}
        <h3 className="grow text-left truncate">{listObj.name}</h3>
      </button>
    </Link>
  )
}

/**
 * List card component.
 */
export function ListCard({listObj}: {listObj: ListObject}) {
  return (
    <Link to={`/list/${listObj.id}`}>
      <button className={"flex flex-col gap-2 items-center justify-center py-12 px-2 rounded-lg w-34 h-52 lg:w-40"} style={{backgroundColor: tryGetColor(listObj.color)}}>
        {tryGetIcon(listObj.icon)}
        <h3 className="truncate max-w-full">{listObj.name}</h3>
      </button>
    </Link>
  )
}