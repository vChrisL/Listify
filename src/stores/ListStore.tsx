import { create } from "zustand";
import { ListObject } from "../types/ListType";

const LOCAL_STORAGE_NAME = "listifyLists";

type ListStore = {
  lists: ListObject[],
  addList: (newList: ListObject) => void,
  // modifyList: (targetList: ListObject) => boolean,
  // deleteList: (targetList: ListObject) => boolean,
}

export const useListStore = create<ListStore>(set => ({
  lists: JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME) ?? "[]"),
  addList: (newList: ListObject) => {
    set((state) => {
      const newListState = [...state.lists, newList];
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(newListState));
      return {lists: newListState}
    })
  }
}))