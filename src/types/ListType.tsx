import { ReactNode } from "react";

type ListItem = {
  id:     number,
  title:  string,
  desc:   string,
  url?:   string
};

export type ListObject = {
  color:  string,
  icon:   ReactNode,
  // id:     number,
  name:   string,
  // items:  ListItem
};