import { useRef } from "react";
import { useSidebarStore } from "../stores/MenuStore";
import { BookIcon, DashboardIcon } from "../util/Icons";
import { useOnClickOutside } from "../util/OnClickOutsideHook";
import { ListShortcut } from "./List";
import { tryGetColor } from "../util/util";
import { motion } from "motion/react";

export function Sidebar() {
  const setDisplaySidebar = useSidebarStore(state => state.setIsDisplayed);

  const sidebarRef = useRef(null);
  useOnClickOutside(sidebarRef, (): void => {
    setDisplaySidebar(false);
  });

  return (
    <motion.aside 
      ref={sidebarRef} 
      className="absolute flex flex-col items-center gap-4 top-0 left-0 bg-secondary-bg w-3/4 h-screen rounded-r-lg p-4"
      initial={{x: "-100vw"}}
      animate={{
        x: 0,
        transition: {
          duration: 0.2
        }
      }}
      exit={{x: "-100vw"}}
    >
      <div className={"flex flex-row justify-center items-center gap-2"}>
        <BookIcon style={"w-10 h-10 stroke-text-color"}/>
        <h1>Listify</h1>
      </div>

      <div className="w-full">
        <button className="flex flex-row gap-2 items-center justify-center w-full bg-[#FAA860] rounded-lg p-2 mb-8">
          <DashboardIcon style="w-8 h-8 stroke-text-color"/>
          <h3>Dashboard</h3>
        </button>
        
        <div className="flex flex-col gap-2">
          <ListShortcut listObj={{name: "List 1",                     color: tryGetColor("blue"),   icon: <DashboardIcon style="w-8 h-8 min-w-8  stroke-text-color"/>}}/>
          <ListShortcut listObj={{name: "My Second List",             color: tryGetColor("red"),    icon: <DashboardIcon style="w-8 h-8 min-w-8  stroke-text-color"/>}}/>
          <ListShortcut listObj={{name: "Another Second Second List", color: tryGetColor("purple"), icon: <DashboardIcon style="w-8 h-8 min-w-8  stroke-text-color"/>}}/>
        </div>
        
      </div>
    </motion.aside>
  )
}