// import Button from "@restart/ui/esm/Button";
// import { useState } from "react";
// import { useHistory } from "react-router";
// import { Link } from "react-router-dom";
// import UseAuth from "../hook/UseAuth"

// const Register = () => {
//     const history = useHistory();
//     const { user, signInUsingGoogle, newUser } = UseAuth();
//     const [email, setEmail] = useState({});
//     const [pass, setPass] = useState({});
//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//     }
//     const handlePassword = (e) => {
//         setPass(e.target.value);
//     }
//     const registration = (e) => {
//         e.preventDefault();
//         newUser(email, pass);

//         if (user.email) {
//             history.push('/home')
//         }
//     }


//     return (
//         <div className="mt-5 pt-5">
//             <h2>Register</h2>
//             <form onSubmit="">
//                 <input onBlur={handleEmail} type="email" name=" " placeholder="Email" required></input>
//                 <br />
//                 <input onBlur={handlePassword} type="password" name=" " placeholder="password" className="my-3" required></input>
//                 <br />
//                 <input onClick={registration} type="submit" name=" " value="submit" ></input>
//                 <br />
//             </form>

//             <p className="fw-bold fs-5 me-3">Already have an account:<Link to='/login' className="text-decoration-none ps-2  me-2 ">Log in</Link></p>
//             <h4>OR</h4>
//             <Button className="btn btn-info m-3 " onClick={signInUsingGoogle}>Google sign in</Button>
//         </div>
//     );
// };

// export default Register;