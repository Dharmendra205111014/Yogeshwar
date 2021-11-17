import { useState } from "react";
import AddMember from "./AddMember";
import CreateGroup from "./CreateGroup";

const Landing = () => {
  const [addMember, setAddMember] = useState(null);
  const [createGroup, setCreateGroup] = useState(null);

  const handleAddMember = () => {
    setAddMember(true);
  };

  const handleCreateGroup = () => {
    setCreateGroup(true);
  };

  return (
    <>
      <div className="landing-button-group">
        <div className="add-members">
          <button class="member-btn" onClick={handleAddMember}>
            Add Member
          </button>
        </div>
        <span className="spanner"> OR </span>
        <div className="create-group">
          <button class="member-btn" onClick={handleCreateGroup}>
            Create Group
          </button>
        </div>
      </div>
      {addMember && <AddMember />}
      {createGroup && <CreateGroup />}
    </>
  );
};

export default Landing;
