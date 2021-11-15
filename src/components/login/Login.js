// import Button from "@restart/ui/esm/Button";
// import { useState } from "react";
// import { useHistory } from "react-router";
// import { useLocation } from "react-router";
// import { Link } from "react-router-dom";
// import useAuth from ".."


// const Login = () => {
//     const location = useLocation();
//     const history = useHistory();
//     const [email, setEmail] = useState({});
//     const [pass, setPass] = useState({});
//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//     }
//     const handlePassword = (e) => {
//         setPass(e.target.value);
//     }
//     const login = (e) => {
//         e.preventDefault();
//         logIn(email, pass)
//         if (user.email) {
//             history.push('/home')
//         }

//     }
//     const redirect_uri = location.state?.from || '/home'
//     const { user, signInUsingGoogle, logIn } = UseAuth();
//     const handleLogInGoogle = () => {
//         signInUsingGoogle()
//             .then(result =>
//                 history.push(redirect_uri))

//     }


//     return (
//         <div className="container pt-5 mt-5 login">
//             <h2 className="fw-bold fs-3">Please Log in</h2>
//             <form >
//                 <input onBlur={handleEmail} type="email" name=" " placeholder="Email"></input>
//                 <br />
//                 <input onBlur={handlePassword} type="password" name=" " placeholder="password" className="my-3"></input>
//                 <br />
//                 <input onClick={login} type="submit" name=" " value="submit" ></input>
//                 <br />
//             </form>

//             <p className="fw-bold fs-5 me-3">Create New Account:<Link to='/register' className="text-decoration-none ps-2  me-2 ">Register</Link></p>
//             <h4>OR</h4>
//             <Button className="btn btn-info m-3 " onClick={handleLogInGoogle}>Google sign in</Button>
//         </div>
//     );
// };

// export default Login;