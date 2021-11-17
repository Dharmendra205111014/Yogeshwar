import { useState } from "react";

const GroupDetails = ({ groupName, members }) => {
  const [totalBill, setTotalBill] = useState(null);
  const [eachShare, setEachShare] = useState(null);

  const handleTotalBill = (e) => {
    if (e.target.value === 0) throw Error();
    else setTotalBill(e.target.value);
    calculateShare();
  };

  const calculateShare = () => {
    const breakeven = members.length;
    console.log("bill", totalBill);
    console.log("be", breakeven);
    setEachShare(totalBill / breakeven);
  };

  return (
    <div className="group-container">
      <p className="title"> {groupName} </p>
      <div className="split-group">
        {members && members.length > 0 ? (
          <>
            <input
              type="number"
              placeholder="Enter total bill"
              value={totalBill}
              onKeyUp={(e) => handleTotalBill(e)}
            />
            <div className="friends">
              {members.map((m) => (
                <li value={m.name} key={m.phone}>
                  <span> {m.name} - </span>
                  <span> {eachShare} </span>
                </li>
              ))}
            </div>
          </>
        ) : (
          <span>
            <br />
          </span>
        )}
      </div>
    </div>
  );
};

export default GroupDetails;
