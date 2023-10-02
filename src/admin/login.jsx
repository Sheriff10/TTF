import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const [password, setPassword] = useState("");
   const [err, setErr] = useState(false);

   const handlePasswordChange = (e) => {
      setPassword(e.target.value);
   };

   const navi = useNavigate()

   const handleLogin = async () => {
      try {
         // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
         const response = await axios.post(
            `${window.api}/login`,
            {},
            {
               headers: {
                  "auth-pass": password,
               },
            }
         );

         if (response.data === "Authorized") {
            // Save password in session storage
            sessionStorage.setItem("auth-pass", password);
            navi('/admin/edit-header')
            console.log(response);
         } else {
            console.log("Unauthorized access");
         }
      } catch (error) {
         console.error("Error during login:", error);
         setErr(true);
         alert("Invalid Password")
      }
   };

   return (
      <div className="login">
         <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center">
               <div className="col-md-4">
                  <div className={`card ${err && "bg-red text-light"}`}>
                     <div className="card-body">
                        <h5 className="card-title">Login</h5>
                        <div className="mb-3">
                           <label htmlFor="password" className="form-label">
                              Password
                           </label>
                           <input
                              type="password"
                              className="form-control"
                              id="password"
                              value={password}
                              onChange={handlePasswordChange}
                           />
                        </div>
                        <button
                           type="button"
                           className="btn bg-tblack text-light"
                           onClick={handleLogin}
                        >
                           Submit
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
