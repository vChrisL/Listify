import { AnimatePresence } from "motion/react";
import { Header } from "../components/Header.tsx";
import { DesktopSidebar, Sidebar } from "../components/Sidebar.tsx";
import { useSidebarStore } from "../stores/MenuStore.tsx";
import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useListStore } from "../stores/ListStore.tsx";
import { tryGetIcon } from "../util/ListIconUtil.tsx";
import { EditIcon, PlusIcon, SearchIcon, SortAscIcon, SortDescIcon, SortIcon } from "../util/Icons.tsx";
import { ListItem } from "../components/ListItem.tsx";
import { ListItem as ListItemType } from "../types/ListType.tsx";

enum SortEnum {
  none,
  asc,
  desc
}

/**
 * List Items Page.
 */
export function ListItemsPage() {
  const isDisplaySidebar = useSidebarStore(state => state.isDisplayed);

  const {listid} = useParams();
  if (listid === undefined) return <Navigate replace to="*"/>;
  
  const list = useListStore(state => state.lists).find(obj => obj.id === listid);
  if(list === undefined) return <Navigate replace to="/*"/>;
  
  const [listTitle, setListTitle] = useState<string>(list.name);

  // Update list title and items when listid changes
  useEffect(() => {
    setFilteredListItems([...list.items]);
    setListTitle(list.name);
  }, [listid])

  const [filteredListItems, setFilteredListItems] = useState<ListItemType[]>([...list.items]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [sort, setSort] = useState<SortEnum>(SortEnum.none);

  // Handles searching and sorting List Items
  useEffect(() => {
    const tmpFilteredListItems = list.items.filter(list => list.title.toLowerCase().startsWith(searchInput.trim().toLowerCase()));

    switch(sort) {
      case SortEnum.asc:
        tmpFilteredListItems.sort((a, b) => a.title < b.title ? -1 : 1);
        break;
      case SortEnum.desc:
        tmpFilteredListItems.sort((a, b) => a.title > b.title ? -1 : 1);
        break;
    }

    setFilteredListItems(tmpFilteredListItems);
  }, [searchInput, sort]);


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
            <input type="text" placeholder="Search" className="pl-1 w-full" onChange={(e) => setSearchInput(e.target.value)}/>
          </div>

          <button 
            onClick={() => {
              const s = sort as number;
              if (s + 1 > 2) setSort(0 as SortEnum);
              else setSort(s + 1 as SortEnum);
            }}
          >
            {sort === SortEnum.none && <SortIcon style="w-6 h-6 stroke-text-color"/>}
            {sort === SortEnum.asc && <SortAscIcon style="w-6 h-6 fill-text-color"/>}
            {sort === SortEnum.desc && <SortDescIcon style="w-6 h-6 fill-text-color"/>}
          </button>
        </div>

        <Link to={"new-item"} className="w-full">
          <button className="flex flex-row gap-2 items-center justify-center bg-accent rounded-lg w-full py-1.5">
            <PlusIcon style="w-6 h-6 stroke-text-color"/>
            <h3>New Item</h3>
          </button>
        </Link>

        {
          filteredListItems.map(item => 
            <ListItem key={item.id} item={item}/>
          )
        }

      </div>
    </main>
  )
}