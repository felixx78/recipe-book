"use client";

import Link from "next/link";
import { useState } from "react";
import Select from "./Select";

function Search() {
  const [value, setValue] = useState("");
  const [filterBy, setFilterBy] = useState("");

  return (
    <div className="flex gap-4 items-center justify-center">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        className="bg-black border touch-none placeholder-gray-400 max-w-[400px]  border-gray-600 text-gray-200 pl-3 pr-9 py-1.5 rounded-md w-full"
      />

      <Select
        label="filter"
        onChange={setFilterBy}
        options={["ingredient", "country", "category"]}
      />

      <Link
        href={filterBy ? `?s=${value}&filterBy=${filterBy}` : `?s=${value}`}
        className="bg-gray-700 py-1.5 px-4 rounded-md"
      >
        search
      </Link>
    </div>
  );
}
export default Search;
