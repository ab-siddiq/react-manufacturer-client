import React from 'react';

const User = ({user,index}) => {
    return (
            <tr>
                <th>{index+1}</th>
                <td>{user._id}</td>
                <td>{user.email}</td>
            </tr>
        
    );
};

export default User;