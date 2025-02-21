"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

type Props = {
  label: string;
  onChange: (v: any) => void;
  options: Array<string>;
  className?: string;
};

function Select({ label, onChange, options, className }: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  const [buttonValue, setButtonValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [ref]);

  const handleChange = (i: string) => {
    onChange(i);
    setButtonValue(i);
  };

  return (
    <div className={clsx("relative", className)}>
      <button
        onClick={() => setIsOpen(true)}
        ref={ref}
        className="relative outline-none min-w-[200px] block w-full"
      >
        <div className="bg-black border text-left placeholder-gray-400 border-gray-600 text-gray-200 pl-3 pr-9 py-1.5 rounded-md w-full">
          {buttonValue || label}
        </div>

        <div className="absolute top-1/2 right-2.5 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </button>

      <div
        className={clsx(
          "bg-black border w-full left-0 top-[110%] absolute transition-opacity z-10   divide-y divide-gray-600 rounded-md border-gray-600",
          !isOpen && "opacity-0 invisible"
        )}
      >
        {options.map((i, index) => (
          <button
            key={index}
            onClick={() => handleChange(i)}
            className={clsx(
              "px-2 block w-full text-left py-1.5",
              i === buttonValue ? "bg-gray-900" : "hover:bg-gray-600"
            )}
          >
            {i}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Select;
