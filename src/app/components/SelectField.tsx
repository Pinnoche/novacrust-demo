import { Search } from "lucide-react";
import Image from "next/image";

interface Props {
  title: string;
  options: { label: string; img: string }[];
  onSelect: (val: string) => void;
}

export default function SelectField({ title, options, onSelect }: Props) {
  return (
    <div className="bg-white shadow-lg border border-[#E0E0E0] rounded-xl p-3 space-y-2">
      <div className="w-full flex items-center border border-[#E0E0E0] px-4 rounded-[20px]">
        <Search size={16} className="text-gray-400 mr-2" />
        <input
          placeholder={title}
          className="w-full py-3 text-sm outline-none rounded-[20px]"
        />
      </div>
      {options.map((opt) => (
        <div
          key={opt.label}
          onClick={() => onSelect(opt.label)}
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
