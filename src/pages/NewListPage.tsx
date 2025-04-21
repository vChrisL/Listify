import { AnimatePresence } from "motion/react";
import { Header } from "../components/Header.tsx";
import { DesktopSidebar, Sidebar } from "../components/Sidebar.tsx";
import { useSidebarStore } from "../stores/MenuStore.tsx";
import { ImageIcon, PaintBucketIcon, TitleIcon} from "../util/Icons.tsx";
import { ColorMap } from "../util/ColorUtil.tsx";
import { ListIcons } from "../util/ListIconUtil.tsx";
import { Link } from "react-router-dom";
import { Swatch } from "../components/Swatch.tsx";
import { ReactNode, useState } from "react";
import { ListObject } from "../types/ListType.tsx";
import { useListStore } from "../stores/ListStore.tsx";

/**
 * New List Page.
 */
export function NewListPage() {
  const isDisplaySidebar = useSidebarStore(state => state.isDisplayed);

  const addList = useListStore(state => state.addList);
  const [listTitle, setListTitle] = useState<string>("");
  const [selectedIcon, setSelectedIcon] = useState<ReactNode>();
  const [selectedColor, setSelectedColor] = useState<string>("");

  const [errors, setErrors] = useState<string[]>([]);

  /**
   * Validate if form fields are valid.
   * @returns Returns true if the fields are valid.
   */
  function isValidList() {
    let tmpErrors = [];

    if (listTitle.trim() === "" || listTitle.trim() === null || listTitle.trim() === undefined) tmpErrors.push("title");
    if (selectedIcon === null || selectedIcon === undefined) tmpErrors.push("icon");
    if (selectedColor === "" || selectedColor === null || selectedColor === undefined) tmpErrors.push("color");

    setErrors(tmpErrors);

    return !(tmpErrors.length > 0)
  }

  /**
   * Handles new list form submission.
   * @param e Form event
   */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isValidList()) return;

    let newList: ListObject = {
      name: listTitle,
      icon: selectedIcon,
      color: selectedColor
    };

    addList(newList);
    // redirect user to the new list's page on successful submission
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
          <h2>New List</h2>
        </div>

        <div className="w-full">
          <div className="flex flex-row items-center gap-1">
            <TitleIcon style="w-6 h-6 fill-text-color"/>
            <h3>Title</h3>
          </div>

          <input className={`w-full bg-accent p-2 rounded-lg border-1 border-accent ${errors.includes("title") ? 'border-red-400' : ''}`} type="text" placeholder="List Title" onChange={(e) => { setListTitle(e.target.value) }}/>
        </div>

        <div className="w-full">
          <div className="flex flex-row items-center gap-1">
            <ImageIcon style="w-6 h-6 fill-text-color"/>
            <h3>Icon</h3>
          </div>

          <div className={`flex flex-row flex-wrap gap-2 bg-accent p-4 rounded-lg border-1 border-accent ${errors.includes("icon") ? 'border-red-400' : ''}`}>
            {
              ListIcons.map((icon, index) => 
                <Swatch key={index} style="bg-background p-1 rounded-lg border-2 lg:p-0.5" selected={selectedIcon == icon ? true : false} onClickEvt={() => setSelectedIcon(icon)}>{icon}</Swatch>
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
                <Swatch key={k} style="p-1 rounded-lg border-2 lg:p-0.5" bgColor={v} selected={selectedColor == k ? true : false} onClickEvt={() => setSelectedColor(k)}><div className="w-8 h-8 lg:w-12 lg:h-12"/></Swatch>
              )
            }
          </div>
        </div>

        <div className="flex flex-row gap-4 justify-end w-full">  
          <Link to={"/"}>
            <button className="p-2 font-semibold" type="reset">Discard</button>
          </Link>
          <button className="p-2 font-semibold" type="submit">Create</button>
        </div>
      </form>
    </main>
  )
}