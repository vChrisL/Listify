import { ReactNode } from "react";

type ListItem = {
  id:     string,
  title:  string,
  desc:   string,
  url?:   string
};

export type ListObject = {
  color:  string,
  icon:   string,
  id:     string,
  name:   string,
  // items:  ListItem
};