import Image from "next/image";

interface Props {
  onClose: () => void;
  setSelectedFromWallet?: (val: string) => void;
  setSelectedToWallet?: (val: string) => void;
}

const wallets = [
  { label: "Metamask", img: "/images/mm.png" },
  { label: "Rainbow", img: "/images/rainbow.png" },
  { label: "WalletConnect", img: "/images/wc.png" },
  {
    label: "Other Crypto Wallets(Binance, Coinbase, Bybit etc.)",
    img: "/images/wallet.png",
  },
];

export default function WalletSelect({
  onClose,
  setSelectedFromWallet,
  setSelectedToWallet,
}: Props) {
  const handleSelect = (label: string) => {
    if (setSelectedFromWallet) {
      setSelectedFromWallet(label);
    } else if (setSelectedToWallet) {
      setSelectedToWallet(label);
    }
    onClose();
  };
  return (
    <div className="bg-white shadow-lg border border-[#E0E0E0] rounded-xl p-3 space-y-2">
      {wallets.map((wallet) => (
        <div
          key={wallet.label}
          onClick={() => handleSelect(wallet.label)}
          className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-sm flex items-center gap-2"
        >
          <Image
            src={wallet.img}
            alt={wallet.label}
            width={24}
            height={24}
            priority
          />
          {wallet.label}
        </div>
      ))}
    </div>
  );
}
