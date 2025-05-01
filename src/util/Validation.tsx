import { ReactNode } from "react";

/**
 * Validate if form fields are valid.
 * @param {string} listTitle List title property
 * @param {ReactNode} selectedIcon List icon property
 * @param {string} selectedColor List color property
 * @param setErrors Error list useState
 * @returns {boolean} Returns true if the fields are valid.
 */
export function isValidList(listTitle: string, selectedIcon: ReactNode, selectedColor: string, setErrors: (value: React.SetStateAction<string[]>) => void): boolean {
  let tmpErrors = [];

  if (listTitle.trim() === "" || listTitle.trim() === null || listTitle.trim() === undefined) tmpErrors.push("title");
  if (selectedIcon === "" || selectedIcon === null || selectedIcon === undefined) tmpErrors.push("icon");
  if (selectedColor === "" || selectedColor === null || selectedColor === undefined) tmpErrors.push("color");

  setErrors(tmpErrors);

  return !(tmpErrors.length > 0)
}