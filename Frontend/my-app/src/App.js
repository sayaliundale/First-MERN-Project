import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchedUsers();
  }, []);

  const fetchedUsers = async () => {
    const data = await fetch("http://localhost:8000/users");
    const users = await data.json();
    setUsers(users);
  }

  return (
    <>
      <h1>Hello From React!!!!</h1>

      {users.map((user, index) => (
        <div key={user.id} style={{ marginLeft: "4rem" }}>
          <p>{user.id}
            <span>   {user.first_name} {user.last_name}</span>
            <p>{user.gender}</p>
            <p>{user.email}</p></p>
          <img src={user.img}  />
          <hr />

        </div>

      ))}

    </>
  );
}

export default App;
