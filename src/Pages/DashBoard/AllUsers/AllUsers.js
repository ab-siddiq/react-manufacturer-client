import React, { useEffect, useState } from "react";
import User from "./User/User";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>SL</th>
            <th>Id</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <User key={user._id} user={user} index={index}></User>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
