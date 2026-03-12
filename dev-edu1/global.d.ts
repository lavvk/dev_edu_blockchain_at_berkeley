// Minimal React + JSX type declarations to satisfy TypeScript in this project.

declare module "react" {
  export type ReactNode = any;
  export type FC<P = {}> = (props: P) => ReactNode;
}

declare module "react/jsx-runtime" {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

