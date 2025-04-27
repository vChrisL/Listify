import { AnimatePresence } from "motion/react";
import { Header } from "../components/Header.tsx";
import { DesktopSidebar, Sidebar } from "../components/Sidebar.tsx";
import { useSidebarStore } from "../stores/MenuStore.tsx";
import { ImageIcon, PaintBucketIcon, TitleIcon } from "../util/Icons.tsx";
import { ColorMap } from "../util/ColorUtil.tsx";
import { ListIcons } from "../util/ListIconUtil.tsx";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Swatch } from "../components/Swatch.tsx";
import { ReactNode, useState } from "react";
import { useListStore } from "../stores/ListStore.tsx";
import { isValidList } from "../util/Validation.tsx";
import { ListObject } from "../types/ListType.tsx";

/**
 * Edit List Page.
 */
export function EditListPage() {
  const isDisplaySidebar = useSidebarStore(state => state.isDisplayed);

  const {listid} = useParams();
  if (listid === undefined) return <Navigate replace to="*"/>;
  
  const list = useListStore(state => state.lists).find(obj => obj.id === listid)
  if(list === undefined) return <Navigate replace to="/*"/>;

  const modifyList = useListStore(state => state.modifyList);

  const [listTitle, setListTitle] = useState<string>(list.name);
  const [selectedIcon, setSelectedIcon] = useState<string>(list.icon);
  const [selectedColor, setSelectedColor] = useState<string>(list.color);

  const [errors, setErrors] = useState<string[]>([]);

  const navigate = useNavigate();
  
  /**
   * Handles edit list form submission.
   * @param e Form event
   */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isValidList(listTitle, selectedIcon, selectedColor, setErrors)) return;

    let updatedList: ListObject = {
      name: listTitle,
      icon: selectedIcon,
      color: selectedColor,
      id: list?.id!
    };

    modifyList(list!, updatedList);
    navigate(`/list/${updatedList.id}`);
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
          <h2>Editing {list.name}</h2>
        </div>

        <hr className="hidden lg:block bg-accent w-full border-none h-0.5"/>

        <div className="w-full">
          <div className="flex flex-row items-center gap-1">
            <TitleIcon style="w-6 h-6 fill-text-color"/>
            <h3>Title</h3>
          </div>

          <input 
            className={`w-full bg-accent p-2 rounded-lg border-1 border-accent ${errors.includes("title") ? 'border-red-400' : ''}`} 
            type="text" placeholder="List Title" 
            onChange={(e) => { setListTitle(e.target.value) }}
            defaultValue={listTitle}
          />
        </div>

        <div className="w-full">
          <div className="flex flex-row items-center gap-1">
            <ImageIcon style="w-6 h-6 fill-text-color"/>
            <h3>Icon</h3>
          </div>

          <div className={`flex flex-row flex-wrap gap-2 bg-accent p-4 rounded-lg border-1 border-accent ${errors.includes("icon") ? 'border-red-400' : ''}`}>
            {
              Array.from(ListIcons.entries()).map(([k, v]) =>
                <Swatch 
                  key={k} 
                  style="bg-background p-1 rounded-lg border-2 lg:p-0.5" 
                  selected={selectedIcon == k ? true : false} 
                  onClickEvt={() => setSelectedIcon(k)}
                >
                  {v.swatchIcon}
                </Swatch>
              )
            }
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-row items-center gap-1">
            <PaintBucketIcon style="w-6 h-6 fill-text-color"/>
            <h3>Color</h3>
          </div>

          <div className={`flex flex-row flex-wrap gap-2 bg-accent p-4 rounded-lg border-1 border-accent ${errors.includes("color") ? 'border-red-400' : ''}`}>
            {
              Array.from(ColorMap.entries()).map(([k, v]) =>
                <Swatch 
                  key={k} style="p-1 rounded-lg border-2 lg:p-0.5" 
                  bgColor={v} 
                  selected={selectedColor == k ? true : false} 
                  onClickEvt={() => setSelectedColor(k)}
                >
                  <div className="w-8 h-8 lg:w-12 lg:h-12"/>
                </Swatch>
              )
            }
          </div>
        </div>

        <div className="flex flex-row gap-4 justify-between w-full">  
          <Link to={`/list/${listid}/delete`}>
            <button className="p-2 font-semibold text-red-400" type="reset">Delete List</button>
          </Link>
          <div>
            <Link to={`/list/${listid}`}>
              <button className="p-2 font-semibold" type="reset">Discard</button>
            </Link>
            <button className="p-2 font-semibold" type="submit">Save</button>
          </div>
        </div>
      </form>
    </main>
  )
}