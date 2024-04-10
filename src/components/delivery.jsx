// Delivery.jsx

import React, { useState } from 'react';
import './pages.css';

function Delivery() {
    const [searchQuery, setSearchQuery] = useState('');
    const [orders, setOrders] = useState([
        { orderId: 1, customerName: 'Suyash Bajracharya', orderDate: '2024-04-10', status: 'Pending' },
        { orderId: 2, customerName: 'Aakrit Maharjan', orderDate: '2024-04-09', status: 'Completed' },
        { orderId: 3, customerName: 'Sirish Shakya', orderDate: '2024-04-08', status: 'Cancelled' },
        { orderId: 4, customerName: 'Herald College', orderDate: '2024-04-07', status: 'Pending' }
    ]);

    // Function to handle adding a new order
    function handleAddOrder() {
        window.location.href = '/addOrder';
        console.log('Add new order');
    }

    return (
        <div className="order-container">
            <h2>Delivery Management</h2>
            <div className="search-button-container">
                <input
                    type="text"
                    placeholder="Search for customers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <button onClick={handleAddOrder}>Add Order</button>
            </div>
            <table className="order-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={order.orderId}>
                            <td>{order.orderId}</td>
                            <td>{order.customerName}</td>
                            <td>{order.orderDate}</td>
                            <td>{order.status}</td>
                            <td>
                                <button onClick={() => handleUpdate(order.orderId)}>Update</button>
                                <button onClick={() => handleDelete(order.orderId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    function handleUpdate(orderId) {
        console.log('Update order with ID:', orderId);
    }

    function handleDelete(orderId) {
        console.log('Delete order with ID:', orderId);
    }
}

export default Delivery;
