import { useSidebarStore } from "../stores/MenuStore.tsx";
import {BookIcon, MenuIcon} from "../util/Icons.tsx";

/**
 * Mobile header component.
 */
export function Header() {
  const isDisplaySidebar = useSidebarStore(state => state.isDisplayed);
  const setDisplaySidebar = useSidebarStore(state => state.setIsDisplayed);

  return (
    <header className={`lg:hidden flex flex-row h-12 ${isDisplaySidebar ? 'invisible' : 'visible'}`}>
      <button onClick={() => { setDisplaySidebar(true) }}>
        <MenuIcon style={"w-10 h-10 stroke-text-color"}/>
      </button>

      <div className={"flex flex-row justify-center items-center gap-2 mx-auto"}>
        <BookIcon style={"w-10 h-10 stroke-text-color"}/>
        <h1>Listify</h1>
      </div>

      <span className={"w-10"}/>
    </header>
  )
}