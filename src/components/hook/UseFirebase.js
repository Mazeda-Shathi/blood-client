// import { useEffect, useState } from 'react';
// import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
// import initializeAuthentication from '../firebase/Firebase.init';

// initializeAuthentication();


// const Usefirebase = () => {
//     const [user, setUser] = useState({});
//     const [isLoading, setIsLoading] = useState(true);
//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();
//     //  signInWithRedirect(auth, provider);
//     const GoogleSignIn = () => {
//         setIsLoading(true)
//         return signInWithPopup(auth, provider)


//     }

//     const logOut = () => {
//         setIsLoading(true)
//         signOut(auth)
//             .then(() => { })
//             .finally(() => setIsLoading(false))
//     }

//     useEffect(() => {
//         const unsubscribed = onAuthStateChanged(auth, user => {
//             if (user) {
//                 setUser(user);
//             }
//             else {
//                 setUser({})
//             }
//             setIsLoading(false)
//         })
//         return () => unsubscribed;
//     }, [])

//     return {
//         user,
//         isLoading, setIsLoading,
//         logOut,
//         GoogleSignIn
//     }

// };

// export default Usefirebase;