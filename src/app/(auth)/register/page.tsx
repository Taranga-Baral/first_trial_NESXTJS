/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import React from 'react'
export const metadata = {
  title: "App-Register"
 
}
export default function SignupPage() {
  return (
    <html>
   

    <body>
        <div className="wrapper">
            <div className="inner">
                <img src="images-login/image-1.png" alt="" className="image-1" />
                <form action="">
                    <h3>New Account?</h3>
                    <div className="form-holder">
                        <span className="lnr lnr-user"></span>
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-holder">
                        <span className="lnr lnr-phone-handset"></span>
                        <input type="text" className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="form-holder">
                        <span className="lnr lnr-envelope"></span>
                        <input type="text" className="form-control" placeholder="Mail" />
                    </div>
                    <div className="form-holder">
                        <span className="lnr lnr-lock"></span>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-holder">
                        <span className="lnr lnr-lock"></span>
                        <input type="password" className="form-control" placeholder="Confirm Password" />
                    </div>
                    <button>
                        <span>Register</span>
                    </button>
                </form>
                <img src="images-login/image-2.png" alt="" className="image-2" />
            </div>
        </div>

        <script src="js-login/jquery-3.3.1.min.js"></script>
        <script src="js-login/main.js"></script><link rel="stylesheet" href="fonts-login/linearicons/style.css" />
        <link rel="stylesheet" href="css-login/style.css" />
    </body>
</html>
  )
}
