import React from "react";
import { useQuery } from "react-query";
import User from "./User/User";

const AllUsers = () => {

//  const {data: users, isLoading, refetch} = useQuery('users', () => 
//     fetch("https://enigmatic-journey-32306.herokuapp.com/user"), {
//     method: 'GET',
// }).then((res) => res.json())
//       if(isLoading){
//           return 'loading...'
//       }
const {data: users, isLoading, refetch} = useQuery('users', ()=> fetch('https://enigmatic-journey-32306.herokuapp.com/user').then(res=>res.json()))
if(isLoading){
  return <p>loading...</p>;
}

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>SL</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <User key={user._id} user={user} index={index} refetch={refetch}></User>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
