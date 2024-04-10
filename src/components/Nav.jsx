import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';


export default function Nav({ showSideBar, setShowSideBar }) {
    const [userProfilePicture, setUserProfilePicture] = useState(null); // State to store user profile picture

    // Function to handle user picture upload
    const handlePictureUpload = (event) => {
        const file = event.target.files[0];
        // Perform upload logic and update userProfilePicture state
        setUserProfilePicture(URL.createObjectURL(file));
    };

    return (
        <nav>
            <div className='wrapper'>
                <RxHamburgerMenu className='show-btn' onClick={() => setShowSideBar(!showSideBar)} />
                <div className="logo_container">
                    <h1 className="logoh1">Clothify </h1>
                    <img src="logo.png" className="logo" alt="Clothify Logo" />
                </div>
                <div className="user-profile">
                    {/* Display user profile picture if available, otherwise show default icon */}
                    {userProfilePicture ? (
                        <img className="user-avatar" src={userProfilePicture} alt="User Avatar" />
                    ) : (
                        <label htmlFor="upload-profile-picture">
                            <input
                                type="file"
                                id="upload-profile-picture"
                                accept="image/*"
                                onChange={handlePictureUpload}
                                style={{ display: 'none' }}
                            />
                            <span className="upload-icon">Upload Picture</span>
                        </label>
                    )}
                </div>
            </div>
        </nav>
    );
}
