import React, { useState, useEffect } from 'react';
import './App.css';

const PremiumPage = () => {
    const packages = ['10 sec ', '7 day', '1 month ', '3 month', '1 year'];
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState(null);
    const [selectedPackage, setSelectedPackage] = useState(null);

    useEffect(() => {
        document.title = "Choose Premium Package";
        // Fetch user data from database here
        // For example:
        // fetch('/api/user')
        //   .then(response => response.json())
        //   .then(data => setUser(data));

        // For now, we'll just use a placeholder user
        setUser({ name: 'Jordy love ur mom'});
        //จำลองให้ดูถ้าUser login แล้ว
    }, []);

    const handleApplyClick = (pkg) => {
        setSelectedPackage(pkg);
        setShowModal(true);
    };

    const handleCancelClick = () => {
        setSelectedPackage(null);
    };

    return (
        <div className="premium-page">
            
            <h1>Package Premium</h1>

            {user && (
                <div className="user-profile-banner">
                    <h2>Welcome, {user.name}!</h2>
                    <p>{selectedPackage ? `Package : ${selectedPackage}` : 'Package : F2W'}</p>
                    {selectedPackage && <button className="cancel-subscription-button" onClick={handleCancelClick}>Cancel Subscription</button>}
                
                </div>
            )}
            {showModal && (
                <div className="modal">
                    <h2>User Details</h2>
                    {user ? (
                        <div>
                            <p>UserName : {user.name}</p>
                            <p>Selected Package : {selectedPackage}</p>
                            
                        </div>
                    ) : (
                        <p>Please log in to see user details.</p>
                    )}
                    <button className="close-button" onClick={() => setShowModal(false)}>Close</button>
                </div>
            )}
            <div className="packages">
                {packages.map((pkg, index) => (
                    <div key={index} className="package" onClick={() => handleApplyClick(pkg)}> 
                        <h2>{pkg}</h2>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default PremiumPage;