import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../stylecss/Login.css';
export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const handleLogin = (data:any) => {
        if (data.email === "admin@gmail.com" && data.password === "admin123") {
            sessionStorage.setItem("emailId", data.email);
            navigate("/manageproduct");
        } else {
            alert("Invalid Credentials");
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
                <table className="login-table">
                    <tbody>
                        <tr>
                            <td><label>Email:</label></td>
                            <td>
                                <input type="email" id="email" {...register('email', { required: true })} />
                                {errors.email && errors.email.type === "required" && <span className="login-error">Email is required</span>}
                            </td>
                        </tr>
                        <tr>
                            <td><label>Password:</label></td>
                            <td>
                                <input type="password" id="password" {...register('password', { required: true, minLength: 3 })} />
                                {errors.password && errors.password.type === "minLength" && <span className="login-error">Password is required</span>}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="Login" className="login-button" />
            </form>
        </div>
    );
}
