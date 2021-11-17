import { useState } from "react";
import GroupDetails from "./GroupDetails";

const CreateGroup = () => {
  const [groupName, setGroupName] = useState("");
  const [showGroup, setShowGroup] = useState(false);
  const [number, setNumber] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState([]);
  const [members, setMembers] = useState([]);

  const handleGroupName = (e) => {
    if (e.target.value === "") return;
    else setGroupName(e.target.value);
  };

  const handleCreateGroup = (e) => {
    e.preventDefault();
    setShowGroup(true);
  };

  const addNumber = (e) => {
    if (e.target.value === "") return;
    else setNumber(e.target.value);
  };

  const fetchMemberDetails = () => {
    const groupMembers = [];
    if (phoneNumber?.length === 0) return [];
    else {
      phoneNumber.forEach((m) =>
        groupMembers.push(JSON.parse(localStorage.getItem(m)))
      );
    }
    return groupMembers;
  };

  const addMemberToGroup = (e) => {
    e.preventDefault();
    const userNumbers = [...phoneNumber];
    userNumbers.push(number);
    setPhoneNumber(userNumbers);
    setMembers(fetchMemberDetails());
  };

  return (
    <>
      <div className="group-form">
        <form>
          <label> Group Name: </label> <br />
          <input
            type="text"
            id="fname"
            required
            onChange={(e) => handleGroupName(e)}
          />
          <br />
          <button type="submit" onClick={(e) => handleCreateGroup(e)}>
            Create Group
          </button>
        </form>
      </div>
      {showGroup && (
        <>
          <div className="members-group">
            <span> Enter number of friend to add to group: </span>
            <input type="number" required onKeyUp={(e) => addNumber(e)} />
            <button type="submit" onClick={(e) => addMemberToGroup(e)}>
              {" "}
              Add{" "}
            </button>
          </div>
          <GroupDetails groupName={groupName} members={members} />
        </>
      )}
    </>
  );
};

export default CreateGroup;
