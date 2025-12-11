import { AnimatePresence } from "motion/react";
import { Header } from "../components/Header.tsx";
import { DesktopSidebar, Sidebar } from "../components/Sidebar.tsx";
import { useSidebarStore } from "../stores/MenuStore.tsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useListStore } from "../stores/ListStore.tsx";
import { useEffect, useState } from "react";
import { ListObject } from "../types/ListType.tsx";

/**
 * Delete List Page.
 */
export function DeleteListPage() {
  const navigate = useNavigate();
  const isDisplaySidebar = useSidebarStore(state => state.isDisplayed);
  
  const {listid} = useParams();
  
  const listList = useListStore(state => state.lists)
  const [list, setList] = useState<ListObject>();
  
  const deleteList = useListStore(state => state.deleteList);
  
  useEffect(() => {
    const list = listList.find(obj => obj.id === listid);
    
    if (list === undefined || listid === undefined)
      navigate("/");
    
    setList(list);
  }, []);

  /**
   * Handles delete list form submission.
   * @param e Form event
   */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    deleteList(list!);
    navigate("/");
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
        <h1 className="text-center mx-auto mt-24">Are you sure you wish to delete the list <span className="text-red-400">{list?.name}</span>?</h1>

        <div className="flex flex-row gap-4 font-semibold mx-auto">
          <Link replace to={`/list/${list?.id}/edit`}>
            <button type="button">Cancel</button>
          </Link>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </main>
  )
}