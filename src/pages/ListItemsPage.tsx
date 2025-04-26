import { AnimatePresence } from "motion/react";
import { Header } from "../components/Header.tsx";
import { DesktopSidebar, Sidebar } from "../components/Sidebar.tsx";
import { useSidebarStore } from "../stores/MenuStore.tsx";
import { Link, Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useListStore } from "../stores/ListStore.tsx";
import { tryGetIcon } from "../util/ListIconUtil.tsx";
import { EditIcon, PlusIcon, SearchIcon, SortIcon } from "../util/Icons.tsx";
import { ListItem } from "../components/ListItem.tsx";


/**
 * List Items Page.
 */
export function ListItemsPage() {
  const isDisplaySidebar = useSidebarStore(state => state.isDisplayed);

  const {listid} = useParams();
  if (listid === undefined) return <Navigate replace to="*"/>;
  
  const list = useListStore(state => state.lists).find(obj => obj.id === listid)
  if(list === undefined) return <Navigate replace to="/*"/>;


  const [listTitle] = useState<string>(list.name);

  return (
    <main className={"flex flex-col gap-4 h-full overflow-hidden lg:flex-row"}>
      <AnimatePresence>
        {isDisplaySidebar && <Sidebar/>}
      </AnimatePresence>

      <Header/>

      <DesktopSidebar/>

      <div className={"flex flex-col gap-4 items-center p-4 rounded-t-lg bg-secondary-bg h-[calc(100%-4rem)] lg:h-full lg:grow lg:mt-4 lg:mr-4 lg:items-start lg:p-8 overflow-y-auto"}>
        <div className="flex flex-row gap-2 items-center">
          <div className="hidden lg:block">
            {tryGetIcon(list.icon)}
          </div>
          <h2>{listTitle}</h2>
          <Link to={`/list/${list.id}/edit`}>
            <button className="flex justify-center items-center">
              <EditIcon style="w-6 h-6 stroke-text-color"/>
            </button>
          </Link>
        </div>

        <hr className="hidden lg:block bg-accent w-full border-none h-0.5"/>

        <div className="flex flex-row gap-2 w-full">
          <div className="flex flex-row items-center bg-accent p-1.5 rounded-lg w-full lg:w-full">
            <SearchIcon style={"w-6 h-6 fill-text-color"}/>
            <input type="text" placeholder="Search" className="pl-1 w-full"/>
          </div>

          <button>
            <SortIcon style="w-6 h-6 stroke-text-color"/>
          </button>
        </div>

        <button className="flex flex-row gap-2 items-center justify-center bg-accent rounded-lg w-full py-1.5">
          <PlusIcon style="w-6 h-6 stroke-text-color"/>
          <h3>New Item</h3>
        </button>

        {
          Array.from({length: 12}, (_) =>
            <ListItem/>
          )
        }

      </div>
    </main>
  )
}