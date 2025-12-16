interface Props {
  active: string;
  onChange: (val: string) => void;
};

const tabs = [
  { key: "cryptoToCash", label: "Crypto to cash" },
  { key: "cashToCrypto", label: "Cash to crypto" },
  { key: "cryptoLoan", label: "Crypto to fiat loan" },
];

export default function TabSwitcher({ active, onChange }: Props) {
  return (
    <div className="flex bg-gray-100 rounded-full p-1">
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`flex-1 py-2 text-xs sm:text-sm font-semibold cursor-pointer rounded-full transition
            ${active === tab.key ? "bg-emerald-900 text-white" : "text-gray-500"}
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
