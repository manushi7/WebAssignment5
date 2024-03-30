import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { collection, doc, getDocs, query } from "firebase/firestore";
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../pages/css/UserListingPage.css'; // Import custom CSS file
import { db } from '../firestoreConfig.js';

export default function UserListingPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersQuery = query(collection(db, "users"));

                const querySnapshot = await getDocs(usersQuery);

                let newUsers = []
                
                querySnapshot.forEach((doc) => {
                    const user = doc.data()

                    newUsers = [...newUsers, user]
                        // doc.data() is never undefined for query doc snapshots
                });

                setUsers(newUsers);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="content">
          <h2 className="page-title">User Listing</h2>
          <div className="row">
            <div className="col">
              <div className="user-card-container mt-5">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    users.map(user => (
                        <Card key={user.id} className="user-card">
                          <Card.Body>
                            <Card.Title>{user.displayName}</Card.Title>
                            <Card.Text>Email: {user.email}</Card.Text>
                            <Card.Text>Phone Number: {user.phoneNumber}</Card.Text>
                          </Card.Body>
                        </Card>
                    ))
                )}
              </div>
            </div>
          </div>
        </div>
    );
};
