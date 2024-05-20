import TotoalBalanceBox from "@/components/TotoalBalanceBox";
import HeaderBox from "@/components/ui/HeaderBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Amol SB" };
  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={`${loggedIn?.firstName || "Guest"}`}
            subtext="Access and manage your accounts and transactions effectively."
          />
          <TotoalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
