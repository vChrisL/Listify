import { create } from "zustand";
import { ListObject } from "../types/ListType";

const LOCAL_STORAGE_NAME = "listifyLists";

type ListStore = {
  lists: ListObject[],
  addList: (newList: ListObject) => void,
  modifyList: (targetList: ListObject, updatedList: ListObject) => void,
  deleteList: (targetList: ListObject) => void,
  updateLocalStorage: () => void
}

export const useListStore = create<ListStore>(set => ({
  lists: JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME) ?? "[]"),

  addList: (newList: ListObject) => {
    set((state) => {
      const newListState = [...state.lists, newList];

      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(newListState));
      return {lists: newListState};
    })
  },
  modifyList: (targetList: ListObject, updatedList: ListObject) => {
    set((state) => {
      const newListState = [...state.lists];
      const targetIndex = newListState.findIndex(obj => obj.id === targetList.id);
      newListState[targetIndex] = updatedList;

      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(newListState));
      return {lists: newListState};
    })
  },
  deleteList: (targetList: ListObject) => {
    set((state) => {
      const newListState = [...state.lists];
      const targetIndex = newListState.findIndex(obj => obj.id === targetList.id);
      newListState.splice(targetIndex, 1);

      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(newListState));
      return {lists: newListState};
    })
  },

  updateLocalStorage: () => {
    set((state) => {

      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state.lists));
      return {lists: state.lists}
    })
  }
}))