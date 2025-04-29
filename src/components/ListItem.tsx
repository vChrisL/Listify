import { useRef, useState } from "react";
import { CopyIcon, EditIcon } from "../util/Icons";
import { useOnClickOutside } from "../util/OnClickOutsideHook";
import { ListItem as Item } from "../types/ListType";

/**
 * List item component.
 */
export function ListItem({item}: {item: Item}) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const listItemRef = useRef(null);
  useOnClickOutside(listItemRef, (): void => {
    setIsEditing(false);
  });

  return (
    <>
    {!isEditing &&
      <div className="bg-accent rounded-lg w-full p-4 text-left">
        <div className="flex flex-row items-center justify-between">
          <h3 className="lg:text-xl text-wrap max-w-56 lg:max-w-full">{item.title}</h3>
          <button onClick={ () => setIsEditing(true) }>
            <EditIcon style="w-6 h-6 stroke-text-color"/>
          </button>
        </div>

        <div className="flex flex-row items-center gap-2 mb-2">
          <p className="truncate">{item.url}</p>
          {item.url !== "" &&
            <button>
              <CopyIcon style="w-4 h-4 stroke-text-color"/>
            </button>
          }
        </div>

        <p className="lg:text-lg">{item.desc}</p>
      </div>
    }

    {isEditing &&
      <form 
        onSubmit={() => { console.log("submit"); }} 
        ref={listItemRef} 
        className="flex flex-col gap-4 bg-accent rounded-lg w-full p-4 text-left"
      >
        <input type="text" className="lg:text-xl text-wrap max-w-56 lg:max-w-full" placeholder="Item Title"/>
        <input type="text" className="truncate" placeholder="URL"/>
        <textarea className="lg:text-lg w-full" placeholder="Item Description"/>
      
        <div className="flex flex-row justify-between font-semibold">
          <button className="text-red-400">Delete Item</button>

          <div className="flex flex-row gap-4 justify-between">
            <button type="button" onClick={ () => setIsEditing(false) }>Discard</button>
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    }
    </>
  )
}