import React, { useState } from 'react';
import './App.css';

const PremiumPage = () => {
    const packages = ['1 sec ', '7 day', '1 month ', '3 month', '1 year'];
    const [showModal, setShowModal] = useState(false);

    const handleApplyClick = () => {
        setShowModal(true);
    };

    return (
        <div className="premium-page">
            <h1>Package Premium</h1>
            {showModal && (
                <div className="modal">
                    <h2>User Details</h2>
                    {/* Add your user details form or display here */}
                    <button onClick={() => setShowModal(false)}>Close</button>
                </div>
            )}
            <div className="packages">
                {packages.map((pkg, index) => (
                    <div key={index} className="package">
                        <h2>{pkg}</h2>
                        <button onClick={handleApplyClick}>Apply</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PremiumPage;