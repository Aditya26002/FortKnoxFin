import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotaBalanceBox from "@/components/TotaBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Aditya",
    lastName: "Kumar",
    email: "asfd@njn",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and amnage your account and transactions efficiently."
          />
          <TotaBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12156.21}
          />
        </header>
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 12156.21 }, { currentBalance: 156.23 }]}
      />
    </section>
  );
};

export default Home;
