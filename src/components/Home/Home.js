import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home(props) {
  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
        <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
            <h1>{props.name ? "":<Link to="/signup">Signup</Link>}
            </h1>
            <h1>
            {props.name ? "":<Link to="/login">Login</Link>}
            </h1>
            <h1>{props.name ? <Link to="/logout">Logout</Link> : ""}
            </h1>

        </div>
    </div>
  )
}

export default Home