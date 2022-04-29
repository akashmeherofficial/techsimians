import React from "react";

function BillingApproval() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="bill-container">
      {/* <div className="m-5 p-5  bg-white rounded shadow ">
        <h1 className="uppercase text-xl font-bold m-5">BILLING APPROVAL</h1>
      </div> */}
      <main className="m-5 p-5  bg-white rounded shadow ">
        <header className="flex flex-col items-center justify-center mb-5">
          <h1 className="font-bold uppercase tracking-wide text-3xl mb-4">
            INVOICE
          </h1>
          <div>
            <h2 className="font-bold tracking-wide text-2xl underline mb-3">
              Invoice
            </h2>
          </div>
          <div>
            <ul className="flex items-center justify-between flex-wrap">
              <li>
                <button className="btn" onClick={handlePrint}>
                  Print
                </button>
              </li>
              <li>
                <button className="btn">Download</button>
              </li>
              <li>
                <button className="btn">Send</button>
              </li>
            </ul>
          </div>
        </header>
        <section className="flex flex-col items-end justify-end">
          <h2 className="text-xl uppercase">Firm's Name</h2>
          <p>Address</p>
        </section>
        <section className="flex flex-col items-start justify-start">
          <h2 className="text-xl uppercase">Attorney's Name</h2>
        </section>
        <section className="flex flex-col items-start justify-start">
          <h2>Billing Status</h2>
        </section>
        <article className="mt-5 flex flex-col items-start justify-start">
          <ul>
            <li>
              <span className="font-bold">Invoice Number:</span>
            </li>
            <li>
              <span className="font-bold">Invoice Date:</span>
            </li>
            <li>
              <span className="font-bold">Due Date:</span>
            </li>
          </ul>
        </article>

        <footer className="flex flex-col items-start justify-start">
          <ul>
            <li>Name :</li>
            <li>Firm :</li>
            <li>E-mail :</li>
            <li>Phone Number :</li>
            <li>Status :</li>
          </ul>
        </footer>
      </main>
    </div>
  );
}

export default BillingApproval;
