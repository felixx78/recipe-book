"use client";

import { useEffect } from "react";

function Title({ value }: { value: string }) {
  useEffect(() => {
    document.title = value;
    return () => {
      document.title = "Recipe book";
    };
  }, [value]);

  return null;
}
export default Title;
