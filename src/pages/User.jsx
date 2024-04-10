import { useState } from "react";
import Nav from "../components/Nav";
import Siderbar from "../components/Siderbar";
import UserTable from "../components/UserTable"; // Import the UserTable component

export default function User() {
    const [showSideBar, setShowSideBar] = useState(false);
    
    return (
        <>
            <div className='flex'>
                {showSideBar &&  <Siderbar/>}
         
                <div className='home-container'>
                    <Nav showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
                    <div className='widjets'>
                        {/* Replace the h1 with UserTable component */}
                        <UserTable />
                    </div>
                </div>
            </div>
        </>
    );
}
