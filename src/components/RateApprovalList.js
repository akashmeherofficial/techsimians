import React from "react";

function RateApprovalList(props) {
  return (
    <div>
      <h4 className="uppercase text-xl underline font-bold mb-4">
        Billing Approval
      </h4>
      {props.list.map((itm) => {
        return (
          <>
            <span>Bill : </span>
            <li className="billing-list">
              <h6>Lawyer's Name : {itm.itemname}</h6>
              <h6>Rate(Rs.) : {itm.itemrate} INR</h6>
              <button>Approve</button>
              <button>Reject</button>
            </li>
          </>
        );
      })}
    </div>
  );
}

export default RateApprovalList;
