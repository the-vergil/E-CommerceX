// import React from "react";

// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import "./Newsletter.scss";

// const Newsletter = () => {
//   return (
//     <div className="newsletter-section">
//       <div className="newsletter-content">
//         <span className="big-text">Sign up for latest updates and offers</span>

//         <div className="text">Will be used in accordance with our Policy</div>

//         <div className="social-icons">
//           <div className="icon">
//             <FaFacebookF size={14} />
//           </div>
//           <div className="icon">
//             <FaTwitter size={14} />
//           </div>
//           <div className="icon">
//             <FaInstagram size={14} />
//           </div>
//           <div className="icon">
//             <FaLinkedinIn size={14} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Newsletter;



import React, { useState } from 'react';
import axios from 'axios';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import './Newsletter.scss';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:1337/api/user-emails', {
      data: {
        email: email,
      },
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="big-text">Sign up for latest updates and offers</span>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </div>
        </form>

        <div className="text">Will be used in accordance with our Policy</div>

        <div className="social-icons">
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaTwitter size={14} />
          </div>
          <div className="icon">
            <FaInstagram size={14} />
          </div>
          <div className="icon">
            <FaLinkedinIn size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
