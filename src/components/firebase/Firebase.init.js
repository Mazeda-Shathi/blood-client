import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase/Firebase.config";
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;