import { AnimatePresence } from "motion/react";
import { Header } from "../components/Header.tsx";
import { DesktopSidebar, Sidebar } from "../components/Sidebar.tsx";
import { useSidebarStore } from "../stores/MenuStore.tsx";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useListStore } from "../stores/ListStore.tsx";

/**
 * Delete List Item Page.
 */
export function DeleteListItemPage() {
  const isDisplaySidebar = useSidebarStore(state => state.isDisplayed);
  
  const {listid} = useParams();
  if (listid === undefined) return <Navigate replace to="*"/>;
  
  const list = useListStore(state => state.lists).find(obj => obj.id === listid);
  if(list === undefined) return <Navigate replace to="/*"/>;

  const {itemid} = useParams();
  if (itemid === undefined) return <Navigate replace to="*"/>;
  
  const item = list.items.find(obj => obj.id === itemid);
  if(item === undefined) return <Navigate replace to="/*"/>;
  
  const navigate = useNavigate();
  const updateLocalStorage = useListStore(state => state.updateLocalStorage);
  
  /**
   * Handles delete list form submission.
   * @param e Form event
   */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const itemIndex = list?.items.indexOf(item!);
    list?.items.splice(itemIndex!, 1);

    updateLocalStorage();
    navigate(`/list/${list!.id}`);
  }

  return (
    <main className={"flex flex-col gap-4 h-full overflow-hidden lg:flex-row"}>
      <AnimatePresence>
        {isDisplaySidebar && <Sidebar/>}
      </AnimatePresence>

      <Header/>

      <DesktopSidebar/>

      <form 
        className={"flex flex-col gap-4 items-center p-4 rounded-t-lg bg-secondary-bg h-[calc(100%-4rem)] lg:h-full lg:grow lg:mt-4 lg:mr-4 lg:items-start lg:p-8 overflow-y-auto"}
        onSubmit={(e) => { handleSubmit(e) }}
      >
        <h1 className="text-center mx-auto mt-24">Are you sure you wish to delete the item <span className="text-red-400">{item.title}</span>?</h1>

        <div className="flex flex-row gap-4 font-semibold mx-auto">
          <Link replace to={`/list/${list.id}/edit`}>
            <button type="button">Cancel</button>
          </Link>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </main>
  )
}