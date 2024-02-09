import React, { useState } from 'react'
import styles from './Signup.module.css';
import InputControl from '../InputControl/InputControl'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

function Signup() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    })

    // const [passErrorMsg, setPassErrorMsg] = useState("");

    const [errorMsg, setErrorMsg] = useState("");

    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if (!values.name || !values.email || !values.password) {
            setErrorMsg("Please fill all the fields");
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.password).then(res => {
            setSubmitButtonDisabled(false);
            const user = res.user;
            updateProfile(user, {
                displayName: values.name,
            })
            console.log(res);
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
            <h1 className={styles.heading}>Signup</h1>
            <InputControl label="Name" placeholder="Enter your name"
            onChange = {(event) => 
                setValues((prev) => ({...prev,name: event.target.value}))
            }
            />
            <InputControl label="Email" placeholder="Enter email address"
            onChange = {(event) => 
                setValues((prev) => ({...prev,email: event.target.value}))
            }
            />
            <InputControl label="Password" placeholder="Enter password"
            onChange = {(event) => 
                setValues((prev) => ({...prev,password: event.target.value}))
            }
            />
            {/* <b className={styles.error}>{passErrorMsg}</b> */}

            <div className={styles.footer}>
                <b className={styles.error}>{errorMsg}</b>
                <button onClick = {handleSubmission} disabled = {submitButtonDisabled}>Signup</button>
                <p>
                    Already have an account?{" "}
                    <span>
                        <Link to="/login">Login</Link>
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Signup