import React, { useState } from "react";
import RateApprovalList from "./RateApprovalList";

function RateApproval() {
  const [name, updateName] = useState("");
  const [rate, updateRate] = useState("");
  const [list, updateList] = useState([]);

  const onChangeHandlerName = (e) => {
    updateName(e.target.value);
  };
  const onChangeHandlerRate = (e) => {
    updateRate(e.target.value);
  };
  const addItemToList = () => {
    console.log("List", list);
    updateList([...list, { itemname: name, itemrate: rate, key: Date.now() }]);
    updateName("");
    updateRate("");
  };
  return (
    <div className="lawyer-approval-container">
      {/* <div className="m-4 p-5  bg-white rounded shadow ">
        <h1 className="uppercase text-xl font-bold m-5">
          Attorney's Rate Approval
        </h1>
        <h3>Firm's Name:</h3>
        <input type="text" />

        <button className="bg-blue">Authorize</button>
      </div> */}
      <div className="lawyer-display"></div>
      <div className="m-5 p-5  bg-white rounded shadow ">
        <h1 className="uppercase text-xl font-bold m-5">
          Attorney's Rate Approval
        </h1>
        <h3>Lawyer/Attorney's Name:</h3>
        <input value={name} onChange={onChangeHandlerName} type="text" />
        <h3>Rate (in INR) </h3>
        <input
          value={rate}
          onChange={onChangeHandlerRate}
          type="number"
          name=""
          id=""
        />
        <br></br>
        <button onClick={addItemToList}>Add Lawyer</button>
        <div className="display">
          <RateApprovalList list={list} />
        </div>
      </div>
    </div>
  );
}

export default RateApproval;
