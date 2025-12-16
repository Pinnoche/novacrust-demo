"use client";

import { useState } from "react";
import TabSwitcher from "./TabSwitcher";
import AmountInput from "./AmountInput";
import SelectField from "./SelectField";
import WalletSelect from "./WalletSelect";
import { ChevronDown } from "lucide-react";

export default function CryptoToCash() {
  const [showTokenList, setShowTokenList] = useState(false);
  const [showWallets, setShowWallets] = useState(false);
  const [showToWallets, setShowToWallets] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState("");
  const [selectedToWallet, setSelectedToWallet] = useState("");

  const options = [
    { label: "USDT - CELO", img: "/images/celo.png" },
    { label: "USDT - TON", img: "/images/ton.png" },
    { label: "USDT - BNB", img: "/images/bnb.png" },
    { label: "USDT - ETH", img: "/images/eth.png" },
  ];

  return (
    <div>
      <div className="w-full space-y-6">
        <div className="relative">
          <AmountInput
            label="You pay"
            value="1.00"
            currency="ETH"
            img="/images/eth.png"
            onCurrencyClick={() => setShowTokenList(!showTokenList)}
          />

          {showTokenList && (
            <div className="w-1/2 absolute right-2 top-[80%] mt-2 z-50">
              <SelectField
                title="Search"
                options={options}
                onSelect={() => setShowTokenList(false)}
              />
            </div>
          )}
        </div>

        <AmountInput
          label="You receive"
          value="1.00"
          currency="NGN"
          img="/images/ng_flag.png"
        />

        <div className="relative">
          <p className="text-xs text-gray-500 mb-1">Pay from</p>

          <div
            onClick={() => setShowWallets(!showWallets)}
            className="border border-[#E0E0E0] rounded-xl px-4 py-3 text-sm cursor-pointer flex justify-between items-center"
          >
            <span>{selectedWallet || "Select an option"}</span>
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
            <span>{selectedToWallet || "Select an option"}</span>
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

      <button className="w-full bg-[#013941] hover:bg-[#013941]/90 text-white py-3 rounded-full cursor-pointer transition duration-150">
        Convert now
      </button>
    </div>
  );
}
