import React, { useState } from "react";
import Nav from "../components/Nav";
import Siderbar from "../components/Siderbar";
import Delivery from "../components/delivery"; // Corrected import statement

export default function DeliveryPage() {
    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <>
            <div className='flex'>
                {showSideBar && <Siderbar />}
                
                <div className='home-container'>
                    <Nav showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
                    <div className='widjets'>
                        {/* Render the Delivery component */}
                        <Delivery />
                    </div>
                </div>
            </div>
        </>
    );
}