import { create } from "zustand";
import { ListObject } from "../types/ListType";

type ListStore = {
  lists: ListObject[],
  addList: (newList: ListObject) => void,
  // modifyList: (targetList: ListObject) => boolean,
  // deleteList: (targetList: ListObject) => boolean,
}

export const useListStore = create<ListStore>(set => ({
  lists: [],
  addList: (newList: ListObject) => {
    set((state) => {
      const newListState = [...state.lists, newList];
      return {lists: newListState}
    })
  }
}))