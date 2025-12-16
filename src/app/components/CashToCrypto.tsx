export default function CashToCrypto({ activeTab }: { activeTab: string }) {
  return (
    <div className="mt-24 space-y-10">
      <h2 className="text-center text-[32px] text-[#013941]">Coming Soon!</h2>
      <h2 className="text-xl text-center text-[#4F4F4F]">
        {activeTab === "cashToCrypto"
          ? "Cash to Crypto"
          : "Crypto to Fiat Loan"}{" "}
        is almost here.
        <p>Enter your email and we’ll let you know the moment it’s live.</p>
      </h2>
      <div className="flex flex-col gap-y-4 px-2">
        <label htmlFor="email" className="text-[16px] text-[#013941]">
          Email
        </label>
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full rounded-[30px] px-6 py-4 border border-[#E0E0E0] outline-none focus:ring-2 focus:ring-[#013941]"
        />
      </div>

      <button className="mt-8 bg-[#013941] rounded-[30px] px-10 py-5 w-full text-[#E6FBF2] text-sm text-bold cursor-pointer">
        Update me
      </button>
    </div>
  );
}
