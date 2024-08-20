/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "./hook/AuthProvider";



const Register = () => {

    const { signUp } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");



    // const handleEmail = (text) => {
    //     setEmail(text);
    //     console.log(email)
    // }

    // console.log(email)
    // console.log(password)


    const handleRegister = () => {
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password))
            setError("Minimum eight characters, at least one letter and one number")
        else{
            setError(" ");
            if(email){
                signUp(email, password)
                .then((result) => {
                    console.log(result.user);
                })
            }
        }

    }


    return (


        <div className="max-w-screen-sm mx-auto">
            <h1 className="text-4xl text-blue-500 text-center
            mb-8 uppercase">Sign Up</h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" required />
            </div>
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
                <button onClick={handleRegister} className="btn btn-primary">Sign Up</button>

            </div>
            <p>{error}</p>

        </div>

    );
};

export default Register;