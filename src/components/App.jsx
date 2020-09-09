import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "ff",
    email: ""
  });

  function updateDetails(event) {
    if (event.target.name === "fName") {
      contact.fName = event.target.value;
    } else if (event.target.name === "lName") {
      contact.lName = event.target.value;
    } else {
      contact.email = event.target.value;
    }
    console.log(contact);
    setContact({
      fName: contact.fName,
      lName: contact.lName,
      email: contact.email
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={updateDetails}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={updateDetails}
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          name="email"
          onChange={updateDetails}
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
