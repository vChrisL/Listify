import { CopyIcon, EditIcon } from "../util/Icons";

/**
 * List item component.
 */
export function ListItem() {
  return (
    <div className="bg-accent rounded-lg w-full p-4 text-left">
      <div className="flex flex-row items-center justify-between">
        <h3 className="lg:text-xl text-wrap max-w-56 lg:max-w-full">List item title goes here List item title goes here List item title goes here</h3>
        <button>
          <EditIcon style="w-6 h-6 stroke-text-color"/>
        </button>
      </div>

      <div className="flex flex-row items-center gap-2 mb-2">
        <p className="truncate">List item link goes here here here here</p>
        <button>
          <CopyIcon style="w-4 h-4 stroke-text-color"/>
        </button>
      </div>

      <p className="lg:text-lg">Optional list item description goes here Optional list item description goes here</p>
    </div>
  )
}