import React, { createContext } from 'react';
import UseFirebase from '../hook/UseFirebase';
// import UseFirebase from '../hook/UseFirebase';


export const AuthContext = createContext();

const AuthProvider = (props) => {
    const { children } = props;
    const allcontext = UseFirebase();
    // console.log(UseFirebase);
    return (
        <AuthContext.Provider value={allcontext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;