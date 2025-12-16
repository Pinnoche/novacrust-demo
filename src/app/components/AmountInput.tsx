import { ChevronDown } from "lucide-react";
import Image from "next/image";


interface Props {
  label: string;
  value: string;
  currency: string;
  onCurrencyClick?: () => void;
  img?: string;
}

export default function AmountInput({
  label,
  value,
  currency,
  onCurrencyClick,
  img,
}: Props) {
  return (
    <div className="border border-[#E0E0E0] rounded-[30px] p-6">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">{value}</span>
        <button
          onClick={onCurrencyClick}
          className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm cursor-pointer"
        >
          {img && <Image src={img} alt="currency" width={20} height={20} priority />}
          {currency}
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
}
