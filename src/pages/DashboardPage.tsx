import { AnimatePresence } from "motion/react";
import { Header } from "../components/Header.tsx";
import { ListCard } from "../components/List.tsx";
import { DesktopSidebar, Sidebar } from "../components/Sidebar.tsx";
import { useSidebarStore } from "../stores/MenuStore.tsx";
import { AddIcon, DashboardIcon, SearchIcon } from "../util/Icons.tsx";
import { Link } from "react-router-dom";
import { useListStore } from "../stores/ListStore.tsx";

/**
 * Dashboard page.
 */
export function DashboardPage() {
  const isDisplaySidebar = useSidebarStore(state => state.isDisplayed);
  const lists = useListStore(state => state.lists);
  
  return (
    <main className={"flex flex-col gap-4 h-full overflow-hidden lg:flex-row"}>
      <AnimatePresence>
        {isDisplaySidebar && <Sidebar/>}
      </AnimatePresence>

      <Header/>

      <DesktopSidebar/>

      <div className={"flex flex-col gap-4 items-center p-4 rounded-t-lg bg-secondary-bg h-[calc(100%-4rem)] lg:h-full lg:grow lg:mt-4 lg:mr-4 lg:items-start lg:p-8"}>
        <div className={"flex flex-col gap-2 lg:flex-row items-center justify-between w-full"}>
          <div className="flex flex-row gap-2 items-center">
            <DashboardIcon style={"w-8 h-8 stroke-text-color"}/>
            <h2>Dashboard</h2>
          </div>

          <div className="flex flex-row items-center bg-accent p-1.5 rounded-lg w-full lg:w-fit">
            <SearchIcon style={"w-6 h-6 fill-text-color"}/>
            <input type="text" placeholder="Search" className="pl-1"/>
          </div>
        </div>
        <hr className="hidden lg:block bg-accent w-full border-none h-0.5"/>

        <div className={"flex flex-row flex-wrap justify-center gap-4 overflow-y-auto w-full md:justify-start"}>
          <Link to={"/new-list"}>
            <button className={"flex flex-col gap-2 items-center justify-center py-12 px-2 bg-secondary-accent rounded-lg w-34 h-52 lg:w-40"}>
              <AddIcon style={"w-12 h-12 stroke-text-color"}/>
              <h3>New List</h3>
            </button>
          </Link>

          {/* {
            Array.from({length: 12}, (_, index) =>
              <ListCard listObj={{name: `List ${index} Name Goes Here`, color: tryGetColor("blue"), icon: <DashboardIcon style="w-12 h-12 stroke-text-color"/>, id:index}}/>
            )
          } */}
          {
            lists.map((list, index) => 
              <ListCard key={index} listObj={list}/>
            )
          }
        </div>
      </div>
    </main>
  )
}