import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        axios.post('http://localhost:5210/api/Login/login', { username, password })
            .then(response => {
                setMessage(response.data.message);
                navigate("/Our");
            })
            .catch(error => {
                console.error("Login request failed:", error);
                setMessage('Invalid username or password');
            });
    };

    return (
        <div>
            <div class="d-flex justify-content-center">
                <div className="card">
                    <div className="card-header">
                        <h2>Login</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={e => e.preventDefault()}>
                            <div className="form-group">
                                <label>Username:</label>
                                <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <br />
                            <button type="button" className="btn btn-outline-dark w-100" onClick={handleLogin}>Login</button>
                        </form>
                        <p>{message}</p>
                    </div>
                </div>
            </div>

            <hr></hr>
            <h1 class='p-2'>The Allbirds Approach</h1>

            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col">
                        <h3>Wear-All-Day Comfort
                        </h3>
                        <p>Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support.</p>
                        <a href="#">Learn More</a>
                    </div>
                    <div class="col">
                        <h3>Sustainability In Every Step</h3>
                        <p>From materials to transport, we’re working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn’t a 30-year goal—it’s now.</p>
                        <a href="#">Learn More</a>

                    </div>
                    <div class="col">
                        <h3>Materials From The Earth</h3>
                        <p>We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugar cane. They’re soft, breathable, and better for the planet—win, win, win.</p>
                        <a href="#">Learn More</a>

                    </div>
                </div>
            </div>
            <br />
        </div>

    );
}

export default Login;
