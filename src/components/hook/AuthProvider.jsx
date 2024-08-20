/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword } from "firebase/auth/web-extension";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import app from "./firebase.config";


const auth = getAuth(app);
export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const authInfo = {
        user,
        signUp,
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
