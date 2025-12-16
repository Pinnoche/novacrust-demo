"use client";

import { useState } from "react";
import AmountInput from "./AmountInput";
import SelectField from "./SelectField";
import WalletSelect from "./WalletSelect";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { toast } from "react-toastify";

export default function CryptoToCash() {
  const [showTokenList, setShowTokenList] = useState<boolean>(false);
  const [showWallets, setShowWallets] = useState<boolean>(false);
  const [showToWallets, setShowToWallets] = useState<boolean>(false);
  const [selectedWallet, setSelectedWallet] = useState<string>("");
  const [selectedToWallet, setSelectedToWallet] = useState<string>("");
  const [fromAmount, setFromAmount] = useState<string | number>("");
  const [toAmount, setToAmount] = useState<string | number>("");
  const [selectedToken, setSelectedToken] = useState({
    label: "ETH",
    img: "/images/eth.png",
  });

  const options = [
    { label: "USDT - CELO", img: "/images/celo.png" },
    { label: "USDT - TON", img: "/images/ton.png" },
    { label: "USDT - BNB", img: "/images/bnb.png" },
    { label: "USDT - ETH", img: "/images/eth.png" },
  ];

  const handleSelect = (option: { label: string; img: string }) => {
    setSelectedToken(option);
    setShowTokenList(false);
  };

  const pickIcon = () => {
    if (selectedWallet === "Metamask") {
      return "/images/mm.png";
    } else if (selectedWallet === "Rainbow") {
      return "/images/rainbow.png";
    } else if (selectedWallet === "WalletConnect") {
      return "/images/wc.png";
    } else {
      return "/images/wallet.png";
    }
  };

  const pickToIcon = () => {
    if (selectedToWallet === "Metamask") {
      return "/images/mm.png";
    } else if (selectedToWallet === "Rainbow") {
      return "/images/rainbow.png";
    } else if (selectedToWallet === "WalletConnect") {
      return "/images/wc.png";
    } else {
      return "/images/wallet.png";
    }
  };

  const handleAmountChange = (val: string) => {
    setFromAmount(val);

    if (val === "") {
      setToAmount("");
      return;
    }

    const converted = (Number(val) * 1450).toFixed(2);
    setToAmount(converted);
  };

  const handleConvert = () => {
    if (!selectedToken.label) {
      toast.warning("Please select a cryptocurrency token to pay with.");
      return;
    }
    if (!fromAmount || Number(fromAmount) === 0) {
      toast.warning("Please enter an amount to convert.");
      return;
    }
    if (!selectedWallet) {
      toast.warning("Please select a wallet to pay from.");
      return;
    }
    if (!selectedToWallet) {
      toast.warning("Please select a wallet to pay to.");
      return;
    }

    toast.success("Conversion successful!");
    setSelectedToken({
      label: "ETH",
      img: "/images/eth.png",
    });
    setFromAmount("");
    setToAmount("");
    setSelectedToWallet("");
    setSelectedWallet("");
  };

  return (
    <div className="space-y-10">
      <div className="w-full space-y-6">
        <div className="relative">
          <AmountInput
            label="You pay"
            value={fromAmount}
            onChange={handleAmountChange}
            currency={selectedToken?.label.replace("USDT - ", "") || "ETH"}
            img={selectedToken?.img || "/images/eth.png"}
            onCurrencyClick={() => setShowTokenList(!showTokenList)}
          />

          {showTokenList && (
            <div className="w-1/2 absolute right-2 top-[80%] mt-2 z-50">
              <SelectField
                title="Search"
                options={options}
                onSelect={handleSelect}
              />
            </div>
          )}
        </div>

        <AmountInput
          label="You receive"
          value={toAmount}
          onChange={() => 0}
          currency="NGN"
          isConverted
          img="/images/ng_flag.png"
        />

        <div className="relative">
          <p className="text-xs text-gray-500 mb-1">Pay from</p>

          <div
            onClick={() => setShowWallets(!showWallets)}
            className="border border-[#E0E0E0] rounded-xl px-4 py-3 text-sm cursor-pointer flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              {selectedWallet && (
                <Image
                  src={pickIcon()}
                  alt="icon"
                  width={24}
                  height={24}
                  priority
                />
              )}
              <span className="font-semibold">
                {selectedWallet || "Select an option"}
              </span>
            </div>
            <ChevronDown size={16} />
          </div>

          {showWallets && (
            <div className="absolute left-0 right-0 top-full mt-2 z-50">
              <WalletSelect
                onClose={() => setShowWallets(false)}
                setSelectedFromWallet={setSelectedWallet}
              />
            </div>
          )}
        </div>

        <div className="relative">
          <p className="text-xs text-gray-500 mb-1">Pay to</p>

          <div
            onClick={() => setShowToWallets(!showToWallets)}
            className="border border-[#E0E0E0] rounded-xl px-4 py-3 text-sm cursor-pointer flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              {selectedToWallet && (
                <Image
                  src={pickToIcon()}
                  alt="icon"
                  width={24}
                  height={24}
                  priority
                />
              )}
              <span className="font-semibold">
                {selectedToWallet || "Select an option"}
              </span>
            </div>
            <ChevronDown size={16} />
          </div>

          {showToWallets && (
            <div className="absolute left-0 right-0 top-full mt-2 z-50">
              <WalletSelect
                onClose={() => setShowToWallets(false)}
                setSelectedToWallet={setSelectedToWallet}
              />
            </div>
          )}
        </div>
      </div>

      <button
        onClick={handleConvert}
        className="w-full bg-[#013941] hover:bg-[#013941]/90 text-white py-3 rounded-full cursor-pointer transition duration-150"
      >
        Convert now
      </button>
    </div>
  );
}
