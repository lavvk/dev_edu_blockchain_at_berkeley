// Ensure JSX intrinsic elements are defined so TS can type-check JSX.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

