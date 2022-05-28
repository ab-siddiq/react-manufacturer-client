import React from 'react';

const User = ({user,index,refetch}) => {
    const {email,role} = user;
    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            // headers: {
            //     'content-type': 'application/json'
            // }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            refetch();
        })
    }
    const makeUser = () =>{
        fetch(`http://localhost:5000/user/nUser/${email}`,{
            method: 'PUT',
            // headers: {
            //     'content-type': 'application/json'
            // }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            refetch()
        })
    }
    return (
            <tr>
                <th>{index+1}</th>
                <td>{user.email}</td>
                <td className=''>
                    {role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs mx-1 btn-accent'>Make Admin</button>}
                    {role === 'admin' && <button onClick={makeUser} className='btn btn-xs mx-1 btn-accent'>Make User</button>}
                    <button className='btn btn-xs mx-1 btn-error'>Remove</button>
                </td>
            </tr>
        
    );
};

export default User;