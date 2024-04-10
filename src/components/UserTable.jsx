import React, { useState } from 'react';
import './UserTable.css'; // Import CSS file

function UserTable() {
    const [searchTerm, setSearchTerm] = useState('');

    // Sample user data
    const users = [
        { ID: 1, User: "SuyashBajracharya", Email: "suyashbajracharya@gmail.com", Status: "Active", Transaction: "Pending" },
        { ID: 2, User: "Sirish Shakya", Email: "sirishshakya@gmail.com", Status: "Active", Transaction: "Completed" },
        { ID: 3, User: "Ram Yadav", Email: "ramyadav@gmail.com", Status: "Inactive", Transaction: "Failed" },
        { ID: 4, User: "Herald College", Email: "heraldcollege@gmail.com", Status: "Active", Transaction: "Pending" }
    ];

    // Function to handle search input change
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter users based on search term
    const filteredUsers = users.filter((user) =>
        user.User.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="user-table-container">
            {/* Search input */}
            <input
                type="text"
                placeholder="Search by User..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
            />

            {/* Table */}
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Transaction</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.ID}>
                            <td>{user.ID}</td>
                            <td>{user.User}</td>
                            <td>{user.Email}</td>
                            <td>{user.Status}</td>
                            <td>{user.Transaction}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;
