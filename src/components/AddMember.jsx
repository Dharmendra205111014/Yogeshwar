import { useState } from "react";

const AddMember = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [added, setAdded] = useState(false);

  const handleName = (e) => {
    if (e.target.value === "") return;
    else setName(e.target.value);
  };

  const handleNumber = (e) => {
    if (e.target.value === "") return;
    else setNumber(e.target.value);
  };

  const handleEmail = (e) => {
    if (e.target.value === "") return;
    else setEmail(e.target.value);
  };

  const addMember = (e) => {
    e.preventDefault();
    const memberID = number;
    const memberDetails = {
      name: name,
      email: email,
      phone: number
    };
    localStorage.setItem(memberID, JSON.stringify(memberDetails));
    setAdded(true);
    setEmail("");
    setName("");
    setNumber("");
  };

  return (
    <div className="member-form">
      <form>
        <label> Name: </label> <br />
        <input
          type="text"
          id="fname"
          required
          value={name}
          onChange={(e) => handleName(e)}
        />
        <br />
        <label> email: </label> <br />
        <input
          type="email"
          id="fname"
          required
          value={email}
          onChange={(e) => handleEmail(e)}
        />
        <br />
        <label> Phone: </label> <br />
        <input
          type="number"
          id="fname"
          required
          value={number}
          onChange={(e) => handleNumber(e)}
        />
        <br />
        <button
          className="add-member-btn"
          type="submit"
          onClick={(e) => addMember(e)}
        >
          Add Member
        </button>
      </form>
      <br />
      {added && <span className="spanner"> Member added successfully! </span>}
    </div>
  );
};

export default AddMember;
