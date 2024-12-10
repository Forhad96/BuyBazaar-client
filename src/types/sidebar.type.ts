import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[]  ;
} | undefined;



//for type for routes and path


export type TUserPath = {
    name?: string,
    path?: string,
    element?: ReactNode,
    children?: TUserPath[]
}