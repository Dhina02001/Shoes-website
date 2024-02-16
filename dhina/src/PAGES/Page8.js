import React, { useState } from "react";
import axios from "axios";
function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:5210/api/Register/register", {
                username: username,
                password: password,
                email: email
            });
            console.log("Registration successful", response.data);
            setSuccessMessage("Registration successful");
            // Reset form fields after successful registration
            setUsername("");
            setPassword("");
            setEmail("");
            setError("");
        } catch (error) {
            console.error("Registration failed", error.response.data.message);
            setError(error.response.data.message);
        }
    };
    return (
        <div>
            <br></br>
            <div className="d-flex justify-content-center">
                <div className="card w-50">
                    <div className="card-header">
                        <div className="d-flex justify-content-center">
                            <h1>CREATE AN ACCOUNT</h1>
                        </div>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 ">
                                <label htmlFor="inputPassword6" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="inputPassword6"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword6" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword6"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationDefaultUsername"
                                        aria-describedby="inputGroupPrepend2"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            {error && <p className="text-danger">{error}</p>}
                            {successMessage && <p className="text-success">{successMessage}</p>} {/* Display success message */}
                            <button className="btn btn-outline-dark w-100" type="submit">REGISTER</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;