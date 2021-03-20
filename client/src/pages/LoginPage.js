//login page with the email or username 
import React from "react";
import Login from "../components/Login";
import "tailwindcss/tailwind.css"

function LoginPage () {
    return (
        <div className="container bg-white px-8 mx-auto rounded-lg">
        <Login></Login>

        </div>
    )
}
export default LoginPage;