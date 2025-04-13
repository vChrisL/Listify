const ColorMap: Map<string, string> = new Map([
  ["blue",    "#688CDA"],
  ["teal",    "#6BD4DB"],
  ["green",   "#72C993"],
  ["purple",  "#A676D0"],
  ["red",     "#D07676"],
  ["pink",    "#D076BD"],
  ["orange",  "#D09976"],
  ["yellow",  "#DDBC62"],
]);

export function tryGetColor(name: string) {
  return ColorMap.get(name) ?? "#ffffff"
}
