import React, { useEffect, useState } from "react";
import axios from "axios";
import './main.css';

const MainPresenter = () => {
    const [hello, setHello] = useState([]);
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    useEffect(() => {
        axios.get('/api/users/search')
            .then((res) => {
                setHello(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [])

    const handleCreateUser = () => {
        const newUser = {
            user_id :userId,
            user_name: userName,
            user_email: userEmail,
            user_password: userPassword,
        };

        axios.post('/api/users/create', newUser)
            .then((res) => {
                // Optionally refresh the user list after creating a new user
                setHello([...hello, res.data]);
                // Clear input fields
                setUserId('');
                setUserName('');
                setUserEmail('');
                setUserPassword('');
            })
            .catch((error) => {
                console.error("Error creating user:", error);
            });
    };

    return (
        <div className="main-container">
            <h2>Create User</h2>
            <input
                type="id"
                placeholder="id"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
            />
            
            <button onClick={handleCreateUser}>Create User</button>

            <h2>Users List</h2>
            {hello.length > 0 ? (
                hello.map((user) => (
                    <div key={user.user_id}>
                        <p>Name: {user.user_name}</p>
                        <p>Email: {user.user_email}</p>
                    </div>
                ))
            ) : (
                <p>No users found</p>
            )}
        </div>
    );
}

export default MainPresenter;
