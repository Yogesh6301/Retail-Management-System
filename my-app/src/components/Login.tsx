import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const handleLogin = (data: any) => {
        if (data.email === "admin@gmail.com" && data.password === "admin123") {
            sessionStorage.setItem("emailId", data.email);
            navigate("/manageproduct");
        } else {
            alert("Invalid Credentials");
        }
    }

    return (
        <div className="login-container"> {/* Add a class name to the container */}
            <h1>Login</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
                <label>Email</label>
                <input type="email" id="email" {...register('email', { required: true })} />
                {errors.email && errors.email.type === "required" && <span>Email is required</span>}
                <br />

                <label>Password</label>
                <input type="password" id="password" {...register('password', { required: true, minLength: 3 })} />
                {errors.password && errors.password.type === "minLength" && <span>Password is required</span>}
                <br />

                <input type="submit" value="Login" />
            </form>
        </div>
    );
}
