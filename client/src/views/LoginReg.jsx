import { Link, navigate } from '@reach/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/Navigation/NavBar';

const LoginReg = () => {

    const [match, setMatch] = useState(false);
    const [firstName, setFirstName] = useSate("");
    const [lastName, setLastName] = useSate("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [roles, setRoles] = useState(["user"])

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/auth/signin", {
            username,
            password
        })
            .then(res => {
                if (res.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                    navigate("/dashboard");
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = {
            firstName,
            lastName,
            username,
            email,
            phone,
            password,
            roles
        }
        axios.post("http://localhost:8080/api/auth/register", newUser) // THE ROUTE HERE NEEDS TO BE CHECKED
            .then(res => {
                handleLogin(e);
            })
            .catch(err => {
                console.log(err.response);
            })
    }
    // This would be a post with either adding to the db or findOne in the db
    // returns a user with all projects & messages
    // if we need tasks, we will have to make another query

    const handleConfirmPassword = (e) => {
        e.preventDefault();
        if (e.target.value === password) {
            setMatch(true);
        }
    }


    return (
        <div className="wrapper">
            <h1>Login and Reg forms</h1>
            <section>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <div>
                            <label>Username: </label>
                            <input type="text" onChange={(e) => { setUsername(e.target.value) }} />
                        </div>
                        <div>
                            <label>Password: </label>
                            <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </section>
            <section>
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <div>
                        <div>
                            <label>First Name: </label>
                            <input type="text" onChange={(e) => { setFirstName(e.target.value) }} />
                        </div>
                        <div>
                            <label>Last Name: </label>
                            <input type="text" onChange={(e) => { setLastName(e.target.value) }} />
                        </div>
                        <div>
                            <label>Username: </label>
                            <input type="text" onChange={(e) => { setUsername(e.target.value) }} />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type="text" onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div>
                            <label>Phone: </label>
                            <input type="text" onChange={(e) => { setPhone(e.target.value) }} />
                        </div>
                        <div>
                            <label>Password: </label>
                            <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div>
                            <label>Confirm Password: </label>
                            <input type="password" onChange={(e) => { handleConfirmPassword }} />
                        </div>
                        {password.length > 7 ?
                            match ?
                                <input type="submit" value="Login" /> : <p>Passwords do not match.</p> :
                            <></>
                        }
                    </div>
                </form>
            </section>

        </div>
    )
}

export default LoginReg;