import {Header} from "../components/Header.tsx";
import {DashboardIcon} from "../util/Icons.tsx";

/**
 * Dashboard page.
 */
export function DashboardPage() {
  return (
    <main className={"flex flex-col gap-4 h-full overflow-hidden"}>
      <Header/>

      <div className={"flex flex-col gap-4 items-center p-4 rounded-t-lg bg-secondary-bg h-[calc(100%-4rem)]"}>
        <div className={"flex flex-row gap-2 items-center"}>
          <DashboardIcon style={"w-8 h-8 stroke-text-color"}/>
          <h2>Dashboard</h2>
        </div>

        <div className={"grid grid-cols-2 gap-4 overflow-y-auto"}>

          {
            Array.from({length: 12}, () =>
              <div className={"flex flex-col gap-2 items-center justify-center py-12 px-2 bg-tertiary-bg rounded-lg"}>
                <DashboardIcon style={"w-12 h-12 stroke-text-color"}/>
                <h3>List Name Goes Here</h3>
              </div>
            )
          }

        </div>
      </div>
    </main>
  )
}