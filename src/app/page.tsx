"use client";

import { useState } from "react";
import CryptoToCash from "./components/CryptoToCash";
import CashToCrypto from "./components/CashToCrypto";
import TabSwitcher from "./components/TabSwitcher";

export default function Home() {
  const [activeTab, setActiveTab] = useState("cryptoToCash");

  const renderView = () => {
    switch (activeTab) {
      case "cryptoToCash":
        return <CryptoToCash />;
      case "cashToCrypto":
        return <CashToCrypto activeTab={activeTab} />;
      default:
        return <CashToCrypto activeTab={activeTab} />;
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-xl px-4 py-6 space-y-10">
        <TabSwitcher active={activeTab} onChange={setActiveTab} />
        {renderView()}
      </section>
    </main>
  );
}
