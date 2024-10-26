declare module "react-dom/client" {
    import { ReactNode } from "react";
    import { Root as ReactRoot } from "react-dom";
  
    export function createRoot(container: Element | DocumentFragment): ReactRoot;
    export type Root = ReactRoot;
  }