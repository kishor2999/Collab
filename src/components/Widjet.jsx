import React from 'react';

import { FaUser } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { BsBagCheckFill } from "react-icons/bs";
export default function Widjet({ type}) {
    let data;

    if (type === "users") {
        data = {
            title: 'Users',
            isMoney: false,
            link: 'See all users',
            icon: <FaUser style={{                      
                fontSize: "2rem",
              }} />
        }
    }

    if (type === "order") {
        data = {
            title: 'Orders',
            isMoney: false,
            link: 'See all orders',
            icon: <BsBagCheckFill  style={{
                fontSize: "2rem",
              }} />
        }
    }

    if (type === "earning") {
        data = {
            title: 'Earnings',
            isMoney: true,
            link: 'View net Earnings',
            icon: <FaHandHoldingDollar  style={{
                fontSize: "2rem",
              }} />
        }
    }

    if (type === "balance") {
        data = {
            title: 'Balance',
            isMoney: true,
            link: 'See Balance',
            icon: <GiWallet  style={{
                fontSize: "2rem",
              }} />
        }
    }

    return (
        <div className="widget-card">
            <div className="left">
                <span className="title">{data && data.title}</span>
                <span className="counter">{data.isMoney && "$"}20000</span>
                <span className="link">{data && data.link}</span>
                <span className="link">{data && data.icon}</span>
            </div>
            {/* Include icon based on type if needed */}
            {/* <div className="right">
                {data && data.icon}
            </div> */}
        </div>
    );
}