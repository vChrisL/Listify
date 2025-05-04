import { useEffect, useRef, useState } from "react";
import { useSidebarStore } from "../stores/MenuStore";
import { BookIcon, DashboardIcon, ExportIcon, ImportIcon } from "../util/Icons";
import { useOnClickOutside } from "../util/OnClickOutsideHook";
import { ListShortcut } from "./List";
import { tryGetColor } from "../util/ColorUtil.tsx";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useListStore } from "../stores/ListStore.tsx";

/**
 * Mobile sidebar component.
 */
export function Sidebar() {
  const setDisplaySidebar = useSidebarStore(state => state.setIsDisplayed);
  const lists = useListStore(state => state.lists);

  const sidebarRef = useRef(null);
  useOnClickOutside(sidebarRef, (): void => {
    setDisplaySidebar(false);
  });

  return (
    <motion.aside 
      ref={sidebarRef} 
      className="absolute flex flex-col items-center gap-4 top-0 left-0 bg-secondary-bg w-64 h-screen rounded-r-lg p-4"
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
        <Link to={"/"}>
          <button className="flex flex-row gap-2 items-center justify-center w-full bg-secondary-accent rounded-lg p-2 mb-8" onClick={() => {setDisplaySidebar(false)}}>
            <DashboardIcon style="w-8 h-8 stroke-text-color"/>
            <h3>Dashboard</h3>
          </button>
        </Link>
        
        <div className="flex flex-col gap-2">
          {
            lists.map((list) => 
              <ListShortcut key={list.id} listObj={list}/>
            )
          }
        </div>
      </div>
    </motion.aside>
  )
}

/**
 * Desktop sidebar component.
 */
export function DesktopSidebar() {
  const lists = useListStore(state => state.lists);

  const loadLists = useListStore(state => state.loadLists);
  const importInputRef = useRef<HTMLInputElement>(null);

  const [importedFile, setImportedFile] = useState<FileList>();

  // Handles importing list data
  useEffect(() => {
    if (importedFile === undefined || !importedFile[0].type.startsWith("application/json")) return;
    
    let fileStr;
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      fileStr = fileReader.result?.toString();
      loadLists(JSON.parse(fileStr ?? ""));
    })

    if(importedFile[0]) {
      fileReader.readAsText(importedFile[0]);
    }

  }, [importedFile]);


  /**
   * Handles exporting lists as a JSON file.
   * @returns Returns string containing the jsonFile object URL
   */
  function exportListData() {
    const listsString = JSON.stringify(lists);
    const data = new Blob([listsString], {type: "application/JSON"});
    const jsonFile = window.URL.createObjectURL(data);

    return jsonFile;
  }

  /**
   * Handles importing list data from a JSON file.
   * @param e Change event 
   */
  function importListData(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files === null) return;

    // validate that the JSON file is valid for this webpage
    setImportedFile(e.target.files);
  }

  return (
    <aside className="hidden lg:flex flex-col items-center justify-between gap-4 w-1/6 p-4 pr-0">
      <div className="flex flex-col items-center gap-4 w-full">
        <div className={"flex flex-row justify-center items-center gap-2"}>
          <BookIcon style={"w-10 h-10 stroke-text-color"}/>
          <h1>Listify</h1>
        </div>

        <div className="w-full">
          <Link to={"/"}>
            <button className="flex flex-row gap-2 items-center justify-center w-full bg-secondary-accent rounded-lg p-2 mb-8">
              <DashboardIcon style="w-8 h-8 stroke-text-color"/>
              <h3>Dashboard</h3>
            </button>
          </Link>
          
          <div className="flex flex-col gap-2">
            {
              lists.map((list) => 
                <ListShortcut key={list.id} listObj={list}/>
              )
            }
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-8">
        <a href={exportListData()} download={"listify-mylists"} className="flex flex-row gap-2">
          <ExportIcon style="w-6 h-6 fill-text-color"/>
          <h3>Export</h3>
        </a>

        <button 
          className="flex flex-row gap-2"
          onClick={() => {
            importInputRef.current?.click();
          }}
        >
          <ImportIcon style="w-6 h-6 fill-text-color"/>
          <h3>Import</h3>
          <input ref={importInputRef} type="file" accept=".json" hidden onChange={(e) => { importListData(e) }}/>
        </button>
      </div>
    </aside>
  )
}