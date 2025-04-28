import { AnimatePresence } from "motion/react";
import { Header } from "../components/Header.tsx";
import { DesktopSidebar, Sidebar } from "../components/Sidebar.tsx";
import { useSidebarStore } from "../stores/MenuStore.tsx";
import { DescriptionIcon, ImageIcon, LinkIcon, PaintBucketIcon, TitleIcon } from "../util/Icons.tsx";
import { ColorMap } from "../util/ColorUtil.tsx";
import { ListIcons } from "../util/ListIconUtil.tsx";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Swatch } from "../components/Swatch.tsx";
import { useState } from "react";
import { ListItem, ListObject } from "../types/ListType.tsx";
import { useListStore } from "../stores/ListStore.tsx";
import { isValidList } from "../util/Validation.tsx";
import { nanoid } from "nanoid";

/**
 * New List Item Page.
 */
export function NewListItemPage() {
  const isDisplaySidebar = useSidebarStore(state => state.isDisplayed);

  const {listid} = useParams();
  if (listid === undefined) return <Navigate replace to="*"/>;
  
  const list = useListStore(state => state.lists).find(obj => obj.id === listid)
  if(list === undefined) return <Navigate replace to="/*"/>;

  const [itemTitle, setItemTitle] = useState<string>("");
  const [itemDesc, setItemDesc] = useState<string>("");
  const [itemURL, setItemURL] = useState<string>("");

  const [errors, setErrors] = useState<string[]>([]);

  const navigate = useNavigate();

  /**
   * Handles new list item form submission.
   * @param e Form event
   */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // validate if list item is valid (i.e. title not empty, null or undefined)
    if(itemTitle === null || itemTitle === undefined || itemTitle.trim() === "") {
      setErrors(["title"]);
      return;
    }

    // create new list item object
    const newItem: ListItem = {
      id: nanoid(),
      title: itemTitle,
      desc: itemDesc,
      url: itemURL
    };
    
    // add list item
    list!.items = [...list!.items, newItem];
    
    // update localStorage
    navigate(`/list/${list!.id}`)
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
        <div className="flex flex-row gap-2 items-center">
          <h2>New List Item</h2>
        </div>

        <hr className="hidden lg:block bg-accent w-full border-none h-0.5"/>

        <div className="w-full">
          <div className="flex flex-row items-center gap-1">
            <TitleIcon style="w-6 h-6 fill-text-color"/>
            <h3>Title</h3>
          </div>

          <input 
            className={`w-full bg-accent p-2 rounded-lg border-1 border-accent ${errors.includes("title") ? 'border-red-400' : ''}`} 
            type="text" 
            placeholder="Item Title" 
            onChange={(e) => { setItemTitle(e.target.value) }}
          />
        </div>

        <div className="w-full">
          <div className="flex flex-row items-center gap-1">
            <LinkIcon style="w-6 h-6 fill-text-color"/>
            <h3>URL</h3>
          </div>

          <input 
            className={`w-full bg-accent p-2 rounded-lg border-1 border-accent`} 
            type="text" 
            placeholder="Item URL (Optional)" 
            onChange={(e) => { setItemURL(e.target.value) }}
          />
        </div>

        <div className="w-full">
          <div className="flex flex-row items-center gap-1">
            <DescriptionIcon style="w-6 h-6 stroke-text-color"/>
            <h3>Description</h3>
          </div>

          <textarea 
            className={`w-full bg-accent p-2 rounded-lg border-1 border-accent`} 
            placeholder="Item Description (Optional)" 
            onChange={(e) => { setItemDesc(e.target.value) }}
          />
        </div>


        <div className="flex flex-row gap-4 justify-end w-full">  
          <Link to={`/list/${list!.id}`}>
            <button className="p-2 font-semibold" type="reset">Discard</button>
          </Link>
          <button className="p-2 font-semibold" type="submit">Create</button>
        </div>
      </form>
    </main>
  )
}