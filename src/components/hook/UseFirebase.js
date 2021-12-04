import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../firebase/Firebase.init';

initializeAuthentication();
const UseFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [error, setError] = useState({})
    const [user, setUser] = useState({})
    const [admin, setAdmin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const registerUser = (email, Password) => {
        console.log(email, Password);
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, Password)
            .then((UserCredential) => {
                setUser(UserCredential.user)
                const newUser = {
                    email: email
                }
                fetch('http://localhost:3001/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('data', data);
                    })
            })

            .catch((error) => {
                const errorCode = error.code;
                const errormessage = error.message;
                setError(errormessage)
            })
            .finally(() => setIsLoading(false))

    }

    const logInUser = (email, Password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, Password)
            .then((UserCredential) => {
                const destination = location?.state?.from || '/'
                navigate(destination)
                setUser(UserCredential.user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errormessage = error.message;
                setError(errormessage)
            })
            .finally(() => setIsLoading(false))
    }



    // const signInUsingGoogle = () => {
    //     setIsLoading(true)
    //     return signInWithPopup(auth, googleProvider)
    // }

    //log out
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }
    // useEffect(() => {
    //     fetch(`https://fathomless-sands-55131.herokuapp.com/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.admin))
    // }, [user.email])



    useEffect(() => {
        setIsLoading(true)
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])

    return {
        user, error,
        registerUser,
        logInUser,
        admin,
        isLoading, setIsLoading,
        logOut,
        // signInUsingGoogle

    }
};

export default UseFirebase;