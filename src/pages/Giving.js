import React from "react";
import { useState } from "react";

const Giving = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1>Giving</h1>
      <div className="giving_prompt-container">
        <p className="giving_prompt">
          We believe that giving is an act of worship, a way to honor God and
          participate in the work He is doing in and through our church. Your
          generosity helps us serve our community, care for those in need, and
          share the love of Jesus with people near and far. Whether you give
          online, in person, or by mail, each gift—no matter the size—supports
          our ministries, outreach efforts, and missions worldwide, bringing
          hope and healing to those who need it most. We invite you to partner
          with us in building God’s kingdom, trusting that He will use every
          offering to make an eternal impact. Thank you for your faithfulness
          and heart to give!
        </p>

        <div className="dropdown">
          <div className="dropdown-header" onClick={toggleDropdown}>
            Bank details
          </div>
          {isOpen && (
            <div className="dropdown-content">
              <p>Guarantee Trust Bank</p>
              <p>0023955821</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Giving;
