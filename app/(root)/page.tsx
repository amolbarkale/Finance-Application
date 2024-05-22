import RightSidebar from "@/components/RightSidebar";
import TotoalBalanceBox from "@/components/TotoalBalanceBox";
import HeaderBox from "@/components/ui/HeaderBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Amol SB",
    lastName: "Barkale",
    email: "barkaleamol@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
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
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1234.5 }, { currentBalance: 2345.5 }]}
      />
    </section>
  );
};

export default Home;
