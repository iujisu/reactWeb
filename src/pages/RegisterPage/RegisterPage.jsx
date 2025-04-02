import React, { useRef, useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'; //유효성 체크
import md5 from 'md5';
import { ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app, { db } from '../../firebase';
import { setUser } from '../../store/userSlice';
import { useDispatch } from 'react-redux';

function RegisterPage() {

    const { register, watch, formState: { errors }, handleSubmit } = useForm();
    const [errorFromSubmit, setErrorFromSubmit] = useState("")
    const [loading, setLoading] = useState(false);
    const auth = getAuth(app);
    const dispatch = useDispatch();

    const password = useRef();
    password.current = watch("password");

    const onSubmit = async (data) => {
        try {
            setLoading(true)

            const createdUser = 
            await createUserWithEmailAndPassword(auth, 
                data.email, data.password) //유저생성 firebase 제공 함수 ,firebase>Authentication 에 등록 사용

            await updateProfile(auth.currentUser, {
                displayName: data.name,
                photoURL: `http://gravatar.com/avatar/${md5( //무료프로필
                    createdUser.user.email)}?d=identicon`
            })

            const userData = {
                uid: createdUser.user.uid,
                displayName: createdUser.user.displayName,
                photoURL: createdUser.user.photoURL
            }
            dispatch(setUser(userData));

            //Firebase>Realtime Database 에 저장해주기 현재 테스트모드 임
            set(ref(db, `users/${createdUser.user.uid}`), {
                name: createdUser.user.displayName,
                image: createdUser.user.photoURL
            })

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
                <h3>회원가입</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input
                    name="email"
                    type="email"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })} //필수
                />
                {errors.email && <p style={{ color: 'red' }} >This email field is required</p>}

                <label>Name</label>
                <input
                    name="name"
                    {...register("name", { required: true, maxLength: 10 })}
                />
                {errors.name && errors.name.type === "required" && <p style={{ color: 'red' }} >This name field is required</p>}
                {errors.name && errors.name.type === "maxLength" && <p style={{ color: 'red' }} >Your input exceed maximum length</p>}

                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && errors.password.type === "required" && <p style={{ color: 'red' }} >This password field is required</p>}
                {errors.password && errors.password.type === "minLength" && <p style={{ color: 'red' }} >Password must have at least 6 characters</p>}

                <label>Password Confirm</label>
                <input
                    name="password_confirm"
                    type="password"
                    {...register("password_confirm", {
                        required: true,
                        validate: (value) =>
                            value === password.current
                    })}
                />
                {errors.password_confirm && errors.password_confirm.type === "required" && <p style={{ color: 'red' }} >This password confirm field is required</p>}
                {errors.password_confirm && errors.password_confirm.type === "validate" && <p style={{ color: 'red' }} >The passwords do not match</p>}

                {errorFromSubmit &&
                    <p style={{ color: 'red' }} >{errorFromSubmit}</p>
                }

                <input type="submit" disabled={loading} value="Send Request"/>
                <Link style={{ color: 'gray', textDecoration: 'none' }} to="/login">이미 아이디가 있다면...  </Link>
            </form>

        </div>
    )
}

export default RegisterPage
