import {BookIcon, MenuIcon} from "../util/Icons.tsx";

/**
 * Mobile header component.
 */
export function Header() {
  return (
    <header className={"flex flex-row h-12"}>
      <button>
        <MenuIcon style={"w-10 h-10 stroke-black"}/>
      </button>

      <span className={"w-1/5"}/>

      <div className={"flex flex-row justify-center items-center gap-2"}>
        <BookIcon style={"w-10 h-10 stroke-black"}/>
        <h1>Listify</h1>
      </div>
    </header>
  )
}