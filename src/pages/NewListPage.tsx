import { AnimatePresence } from "motion/react";
import {Header} from "../components/Header.tsx";
import { ListShortcut } from "../components/List.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { useSidebarStore } from "../stores/MenuStore.tsx";
import { BookIcon, DashboardIcon, ImageIcon, PaintBucketIcon, TitleIcon} from "../util/Icons.tsx";
import { ColorMap, tryGetColor } from "../util/ColorUtil.tsx";
import { ListIcons } from "../util/ListUtil.tsx";

/**
 * Dashboard page.
 */
export function NewListPage() {
  const isDisplaySidebar = useSidebarStore(state => state.isDisplayed);
  
  return (
    <main className={"flex flex-col gap-4 h-full overflow-hidden lg:flex-row"}>
      <AnimatePresence>
        {isDisplaySidebar && <Sidebar/>}
      </AnimatePresence>

      <Header/>

      <aside className="hidden lg:flex flex-col items-center gap-4 w-1/6 p-4 pr-0">
        <div className={"flex flex-row justify-center items-center gap-2"}>
          <BookIcon style={"w-10 h-10 stroke-text-color"}/>
          <h1>Listify</h1>
        </div>

        <div className="w-full">
          <button className="flex flex-row gap-2 items-center justify-center w-full bg-secondary-accent rounded-lg p-2 mb-8">
            <DashboardIcon style="w-8 h-8 stroke-text-color"/>
            <h3>Dashboard</h3>
          </button>
          
          <div className="flex flex-col gap-2">
            <ListShortcut listObj={{name: "List 1",                     color: tryGetColor("blue"),   icon: <DashboardIcon style="w-8 h-8 min-w-8  stroke-text-color"/>}}/>
            <ListShortcut listObj={{name: "My Second List",             color: tryGetColor("red"),    icon: <DashboardIcon style="w-8 h-8 min-w-8  stroke-text-color"/>}}/>
            <ListShortcut listObj={{name: "Another Second Second List", color: tryGetColor("purple"), icon: <DashboardIcon style="w-8 h-8 min-w-8  stroke-text-color"/>}}/>
          </div>
        </div>
      </aside>

      <div className={"flex flex-col gap-4 items-center p-4 rounded-t-lg bg-secondary-bg h-[calc(100%-4rem)] lg:h-full lg:grow lg:mt-4 lg:mr-4 lg:items-start lg:p-8"}>
        <div className="flex flex-row gap-2 items-center">
          <h2>New List</h2>
        </div>

        <div className="w-full">
          <div className="flex flex-row items-center gap-1">
            <TitleIcon style="w-6 h-6 fill-text-color"/>
            <h3>Title</h3>
          </div>

          <input className="w-full bg-accent p-2 rounded-lg" type="text" placeholder="List Title"/>
        </div>

        <div className="w-full">
          <div className="flex flex-row items-center gap-1">
            <ImageIcon style="w-6 h-6 fill-text-color"/>
            <h3>Icon</h3>
          </div>

          <div className="flex flex-row flex-wrap gap-2 bg-accent p-4 pr-0 rounded-lg">
            {
              ListIcons.map((icon, index) => 
                <button key={index} className="bg-background p-1 rounded-lg">
                  {icon} 
                </button>
              )
            }
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-row items-center gap-1">
            <PaintBucketIcon style="w-6 h-6 fill-text-color"/>
            <h3>Color</h3>
          </div>

          <div className="flex flex-row flex-wrap gap-2 bg-accent p-4 pr-0 rounded-lg">
            {
              Array.from(ColorMap.entries()).map(([k, v]) =>
                <button key={k} className="p-1 rounded-lg w-10 h-10 lg:w-12 lg:h-12" style={{backgroundColor: v}}/>
              )
            }
          </div>
        </div>
      </div>
    </main>
  )
}