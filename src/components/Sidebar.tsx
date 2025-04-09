import { useRef } from "react";
import { useSidebarStore } from "../stores/MenuStore";
import { BookIcon, DashboardIcon } from "../util/Icons";
import { useOnClickOutside } from "../util/OnClickOutsideHook";

export function Sidebar() {
  const setDisplaySidebar = useSidebarStore(state => state.setIsDisplayed);

  const sidebarRef = useRef(null);
  useOnClickOutside(sidebarRef, (): void => {
    setDisplaySidebar(false);
  });

  return (
    <aside ref={sidebarRef} className="absolute flex flex-col items-center gap-4 top-0 left-0 bg-secondary-bg w-3/4 h-screen rounded-r-lg p-4">
      <div className={"flex flex-row justify-center items-center gap-2"}>
        <BookIcon style={"w-10 h-10 stroke-black"}/>
        <h1>Listify</h1>
      </div>

      <div>
        <button className="flex flex-ro-w gap-2 bg-tertiary-bg rounded-lg p-2">
          <DashboardIcon style="w-8 h-8 stroke-text-color"/>
          <h3>Dashboard</h3>
        </button>
        Lists shortcuts go here
      </div>
    </aside>
  )
}