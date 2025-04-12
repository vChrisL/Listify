import { ColorMap } from "../components/List";

export function tryGetColor(name: string) {
  return ColorMap.get(name) ?? "#ffffff"
}
