import React from "react";
import About from "./About";
import BillingApproval from "./BillingApproval";
import Navbar from "./Navbar";
import RateApproval from "./RateApproval";

function Home() {
  return (
    <div>
      <Navbar />
      <RateApproval />
      <BillingApproval />
      {/* <About /> */}
    </div>
  );
}

export default Home;
