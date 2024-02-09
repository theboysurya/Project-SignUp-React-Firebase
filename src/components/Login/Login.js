import styles from './Login.module.css'
import React, { useState } from 'react'
import InputControl from '../InputControl/InputControl'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    // const [passErrorMsg, setPassErrorMsg] = useState("");

    const [errorMsg, setErrorMsg] = useState("");

    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const navigate = useNavigate();

    const handleSubmission = () => {
        if (!values.email || !values.password) {
            setErrorMsg("Please fill all the fields");
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.password)
        .then(async(res) => {
            setSubmitButtonDisabled(false);
            // const user = res.user;
            // await updateProfile(user, {
            //     displayName: values.name,
            // })
            console.log(res);
            navigate("/");
        }).catch(error => {
            setSubmitButtonDisabled(false);
            // console.log("Error: ", error.message)
            // var errorCode = error.message;
            setErrorMsg(error.message);
        })
        // setPassErrorMsg("");
    }
  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Login</h1>
            <InputControl label="Email" placeholder="Enter email address" onChange={event => setValues(prev => ({...prev,email:event.target.value }))}/>
            <InputControl label="Password" placeholder="Enter password" onChange={event => setValues(prev => ({...prev,password:event.target.value }))}/>

            <div className={styles.footer}>
                <b className={styles.error}>{errorMsg}</b>
                <button disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
                <p>
                    New here?{" "}
                    <span>
                        <Link to="/signup">Sign up</Link>
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login