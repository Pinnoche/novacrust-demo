import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface Props {
  label: string;
  value: string | number;
  currency: string;
  onCurrencyClick?: () => void;
  onChange: (val: string) => void;
  img?: string;
  isConverted?: boolean;
}

export default function AmountInput({
  label,
  value,
  currency,
  onCurrencyClick,
  img,
  onChange,
  isConverted = false,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (val === "" || /^\d*\.?\d{0,2}$/.test(val)) {
      onChange(val);
    }
  };
  return (
    <div className="border border-[#E0E0E0] rounded-[30px] p-6">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <div className="flex justify-between items-center">
        <input
          name="amount"
          type="text"
          value={value}
          disabled={isConverted}
          className="w-full text-lg font-semibold outline-none"
          onChange={handleChange}
          placeholder="0.00"
        />
        <button
          onClick={onCurrencyClick}
          className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm cursor-pointer"
        >
          {img && (
            <Image src={img} alt="currency" width={20} height={20} priority />
          )}
          {currency}
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
}
