import React, { useState } from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import styles from './Logout.module.css';
import { Link, useNavigate } from 'react-router-dom'

function Logout() {

    // const [errorMsg, setErrorMsg] = useState("");

    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const navigate = useNavigate();

    const handleSubmission = () => {
        setSubmitButtonDisabled(true);
        signOut(auth).then(() => {
            setSubmitButtonDisabled(false);
            navigate("/");
        }).catch(error => {
            setSubmitButtonDisabled(false);
        })
    }

    

  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Confirm Logout</h1>
            {/* <InputControl label="Email" placeholder="Enter email address" onChange={event => setValues(prev => ({...prev,email:event.target.value }))}/>
            <InputControl label="Password" placeholder="Enter password" onChange={event => setValues(prev => ({...prev,password:event.target.value }))}/> */}

            <div className={styles.footer}>
                {/* <b className={styles.error}>{errorMsg}</b> */}
                <button onClick={handleSubmission} disabled={submitButtonDisabled}>Yes, Logout</button>
                {/* <p>
                    New here?{" "}
                    <span>
                        <Link to="/signup">Yes, Logout</Link>
                    </span>
                </p> */}
            </div>
        </div>
    </div>
  )
}

export default Logout