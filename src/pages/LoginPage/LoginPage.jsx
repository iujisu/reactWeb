import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import  connection  from '../../assets/connection.png';
import { Image } from 'react-bootstrap';
function LoginPage() {
    const auth = getAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorFromSubmit, setErrorFromSubmit] = useState("")
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setLoading(true)

            await signInWithEmailAndPassword(auth, data.email, data.password);

            setLoading(false)
        } catch (error) {
            setErrorFromSubmit(error.message)
            setLoading(false)
            setTimeout(() => {
                setErrorFromSubmit("")
            }, 5000);
        }
    }

    return (
        <div className="auth-wrapper">
            <div style={{ textAlign: 'center' }}>
            <Image src={connection} alt="connection" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input
                    name="email"
                    type="email"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && <p style={{ color: 'red' }}>This email field is required</p>}

                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && errors.password.type === "required" && <p style={{ color: 'red' }}>This password field is required</p>}
                {errors.password && errors.password.type === "minLength" && <p style={{ color: 'red' }}>Password must have at least 6 characters</p>}

                {errorFromSubmit &&
                    <p>{errorFromSubmit}</p>
                }

                <input type="submit" disabled={loading} value="LOGIN"/>
                <Link style={{ color: 'gray', textDecoration: 'none' }} to="/register">아직 아이디가 없다면...  </Link>
            </form>
        </div>
    )
}

export default LoginPage
