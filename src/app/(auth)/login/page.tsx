/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-css-tags */
import Link from 'next/link';
import React from 'react';

const RegistrationForm: React.FC = () => {
    return (
      <html>
      

      <body>
          <div className="wrapper">
              <div className="inner">
                  <img src="images-login/image-1.png" alt="" className="image-1" />
                  <form action="">
                      <h3>Already There?</h3>
                      
                      
                      <div className="form-holder">
                          <span className="lnr lnr-envelope"></span>
                          <input type="text" className="form-control" placeholder="Mail" />
                      </div>
                      <div className="form-holder">
                          <span className="lnr lnr-lock"></span>
                          <input type="password" className="form-control" placeholder="Password" />
                      </div>
                      
                      <button>
                      
                          <span>Register</span>
                      </button>
                  </form>
                  <img src="images-login/image-2.png" alt="" className="image-2" />
              </div>
          </div>

          <script src="js-login/jquery-3.3.1.min.js"></script>
          <script src="js-login/main.js"></script>
          <link rel="stylesheet" href="fonts-login/linearicons/style.css" />

          {/* STYLE CSS */}
          <link rel="stylesheet" href="css-login/style.css" />
      </body>
  </html>
    );
};

export default RegistrationForm;
