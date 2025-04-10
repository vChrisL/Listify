import {Header} from "../components/Header.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { useSidebarStore } from "../stores/MenuStore.tsx";
import {AddIcon, DashboardIcon} from "../util/Icons.tsx";

/**
 * Dashboard page.
 */
export function DashboardPage() {
  const isDisplaySidebar = useSidebarStore(state => state.isDisplayed);
  
  return (
    <main className={"flex flex-col gap-4 h-full overflow-hidden"}>
      {isDisplaySidebar && <Sidebar/>}
      <Header/>

      <div className={"flex flex-col gap-4 items-center p-4 rounded-t-lg bg-secondary-bg h-[calc(100%-4rem)]"}>
        <div className={"flex flex-row gap-2 items-center"}>
          <DashboardIcon style={"w-8 h-8 stroke-text-color"}/>
          <h2>Dashboard</h2>
        </div>

        <div className={"grid grid-cols-2 gap-4 overflow-y-auto"}>
          <button className={"flex flex-col gap-2 items-center justify-center py-12 px-2 bg-tertiary-bg rounded-lg"}>
            <AddIcon style={"w-12 h-12 stroke-text-color"}/>
            <h3>New List</h3>
          </button>
          {
            Array.from({length: 12}, () =>
              <button className={"flex flex-col gap-2 items-center justify-center py-12 px-2 bg-tertiary-bg rounded-lg"}>
                <DashboardIcon style={"w-12 h-12 stroke-text-color"}/>
                <h3>List Name Goes Here</h3>
              </button>
            )
          }

        </div>
      </div>
    </main>
  )
}