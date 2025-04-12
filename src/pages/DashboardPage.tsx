import {Header} from "../components/Header.tsx";
import { ListCard, ListShortcut } from "../components/List.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { useSidebarStore } from "../stores/MenuStore.tsx";
import {AddIcon, BookIcon, DashboardIcon} from "../util/Icons.tsx";
import { tryGetColor } from "../util/util.tsx";

/**
 * Dashboard page.
 */
export function DashboardPage() {
  const isDisplaySidebar = useSidebarStore(state => state.isDisplayed);
  
  return (
    <main className={"flex flex-col gap-4 h-full overflow-hidden lg:flex-row"}>
      {isDisplaySidebar && <Sidebar/>}
      <Header/>

      <aside className="hidden lg:flex flex-col items-center gap-4 w-1/6 p-4 pr-0">
        <div className={"flex flex-row justify-center items-center gap-2"}>
          <BookIcon style={"w-10 h-10 stroke-text-color"}/>
          <h1>Listify</h1>
        </div>

        <div className="w-full">
          <button className="flex flex-row gap-2 items-center justify-center w-full bg-[#FAA860] rounded-lg p-2 mb-8">
            <DashboardIcon style="w-8 h-8 stroke-text-color"/>
            <h3>Dashboard</h3>
          </button>
          
          <div className="flex flex-col gap-2">
            <ListShortcut listObj={{name: "List 1", color: tryGetColor("blue")}}/>
            <ListShortcut listObj={{name: "My Second List", color: tryGetColor("red")}}/>
            <ListShortcut listObj={{name: "Another Second Second List", color: tryGetColor("purple")}}/>
          </div>
        </div>
      </aside>

      <div className={"flex flex-col gap-4 items-center p-4 rounded-t-lg bg-secondary-bg h-[calc(100%-4rem)] lg:h-full lg:grow lg:mt-4 lg:mr-4 lg:items-start lg:p-8"}>
        <div className={"flex flex-row gap-2 items-center"}>
          <DashboardIcon style={"w-8 h-8 stroke-text-color"}/>
          <h2>Dashboard</h2>
        </div>
        <hr className="hidden lg:block bg-accent w-full border-none h-0.5"/>

        <div className={"grid grid-cols-2 gap-4 overflow-y-auto w-full xl:grid-cols-7 md:grid-cols-5 sm:grid-cols-3"}>
          <button className={"flex flex-col gap-2 items-center justify-center py-12 px-2 bg-tertiary-bg rounded-lg"}>
            <AddIcon style={"w-12 h-12 stroke-text-color"}/>
            <h3>New List</h3>
          </button>

          {
            Array.from({length: 12}, (_, index) =>
              <ListCard listObj={{name: `List ${index} Name Goes Here`, color: tryGetColor("blue")}}/>
            )
          }
        </div>
      </div>
    </main>
  )
}