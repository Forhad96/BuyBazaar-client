import { ElementType, ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSidebarItem =
  | {
      title: string;
      url: string;
      icon?: ElementType;
      children?: TSidebarItem[];
    }
  | undefined;

//for type for routes and path

export type TUserPath = {
  name?: string;
  path?: string;
  icon?: ElementType;
  element?: ReactNode;
  children?: TUserPath[];
};
