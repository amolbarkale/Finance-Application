import React from "react";

const TotoalBalanceBox = ({
  accounts,
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-blance-chart">{/* DOnutsChart */}</div>

      <div className="flex flex-col gap-6">
        <div className="header-2">Bank Accounts: {totalBanks}</div>
      </div>
    </section>
  );
};

export default TotoalBalanceBox;
