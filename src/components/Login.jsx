/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "./hook/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");



    const handleLogin = () => {
        if(email, password){
          signIn(email, password)
          .then(result => {
            console.log(result.user)
            alert('Successfully login')
            setError(" ")
          })
          .catch((err) => {
            setError(err.message)
          })
        }
    }

    return (
        <div className="max-w-screen-sm mx-auto">
        <h1 className="text-4xl text-blue-500 text-center
        mb-8 uppercase">Login</h1>
        
        
        <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" required />

        </div>
        <div className="form-control mt-6">
            <button onClick={handleLogin} className="btn btn-primary">Login</button>

        </div>
        <p>{error}</p>

    </div>
    );
};

export default Login;