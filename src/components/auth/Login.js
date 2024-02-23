import React ,{useState} from 'react';
import './style.css';
import Swal from 'sweetalert2';

const Login = () => {
    const [name, setName]= useState("");
    const [password, setPassword] =useState("");

    //[0lelplR] user:kminchelle
    const LoginForm = (e) =>{
        e.preventDefault();
        if (!name || !password) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }        
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: name,
                password: password,
            })
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            Swal.fire({
                icon: 'success',
                title: 'Correct!',
                text: `You are Log in`,
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong Credentials!',
                showConfirmButton: true
            });
        });
    };
    
  return (
    <div className='form'>        
        <h1>Login</h1>
        <div className='login-form'>
            <div className="form-row">
                <label htmlFor="Name">Name</label>
                <input
                    id="Name    "
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-row">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
            </div>
            <button onClick={LoginForm} className='submit-btn'>Submit</button>

        </div>
    </div>
  )
}

export default Login