"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

interface Option {
  label: string;
  img: string;
}

interface Props {
  title: string;
  options: Option[];
  onSelect: (opt: Option) => void;
}

export default function SelectField({ title, options, onSelect }: Props) {
  const [query, setQuery] = useState("");

  const filteredOptions = useMemo(() => {
    return options.filter((opt) =>
      opt.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, options]);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white shadow-lg border border-[#E0E0E0] rounded-xl p-3 space-y-2"
    >
      <div className="w-full flex items-center border border-[#E0E0E0] px-4 rounded-[20px]">
        <Search size={16} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder={title}
          className="w-full py-3 text-sm rounded-[20px] outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
      </div>
      {filteredOptions.length === 0 && (
        <p className="text-xs text-gray-400 px-2 py-3">No results found</p>
      )}
      {filteredOptions.map((opt) => (
        <div
          key={opt.label}
          onClick={() => onSelect(opt)}
          className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-sm flex items-center gap-2"
        >
          <Image
            src={opt.img}
            alt={opt.label}
            width={24}
            height={24}
            priority
          />
          {opt.label}
        </div>
      ))}
    </div>
  );
}
