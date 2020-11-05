import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userService } from '../../services/userServices';

function UsersList({ match }) {
    const [users, setUsers] = useState([]);

    //hook to retrive the all user details
    useEffect(() => {       
        userService.getAll().then(x => setUsers(x));
    }, []);


    const onFilerUsersData = event => {
        var allItems = JSON.parse(JSON.stringify(users));
        const usersData = allItems.filter(x => x.first_name.toLowerCase().includes(event.target.value.toLowerCase()));
        setUsers(usersData)
    };


    // render method
    return (
        <div>
            <h3>Users List</h3>
            <hr></hr>
            <div className="pt-2 mb-3">
                <input className="form-control width-30"
                    type="text"
                    placeholder="Search By First/Last Name"
                    onChange={onFilerUsersData} />
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="width-30">Id</th>
                        <th className="width-30">First Name</th>
                        <th className="width-30">Last Name</th>
                        <th className="width-30">Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td><Link to={`/slotBooking/${user.id}`}>{user.first_name}</Link></td>
                            <td>{user.last_name}</td>
                            <td>{user.avatar}</td>
                        </tr>
                    )}

                    {users && !users.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No Users To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UsersList;