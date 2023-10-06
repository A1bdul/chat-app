import {useState} from 'react'
import axios from "axios";
import useDocumentTitle from '../App/changeDocument.jsx';
import {Link, useNavigate} from 'react-router-dom';

function LoginForm({setIsAuthenticated}) {

    useDocumentTitle("Login | ChatApp ")

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const getUserInfo = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_API}auth/jwt/create/.`,
                {email, password})
            localStorage.setItem('access_token', response.data["access"])
            setIsAuthenticated(true);
            navigate("/")
        } catch (e) {
            console.log(e)
        }
    }
    return (<div className="auth-bg">
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-xl-3 col-lg-4">
                    <div className="p-4 pb-0 p-lg-5 pb-lg-0 auth-logo-section">
                        <div className="text-white-50">
                            <h3>
                                <a href="../../../index.html" className="text-white">
                                    <i className="bx bxs-message-alt-detail align-middle text-white h3 mb-1 me-2"/>{" "}
                                    ChatApp
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
                {/* end col */}
                <div className="col-xl-9 col-lg-8">
                    <div className="authentication-page-content">
                        <div className="d-flex flex-column h-100 px-4 pt-4">
                            <div className="row justify-content-center my-auto">
                                <div className="col-sm-8 col-lg-6 col-xl-5 col-xxl-4">
                                    <div className="py-md-5 py-4">
                                        <div className="text-center mb-5">
                                            <h3>Welcome Back !</h3>
                                            <p className="text-muted">Sign in to continue.</p>
                                        </div>
                                        <form onSubmit={getUserInfo}>
                                            <div className="mb-3">
                                                <label htmlFor="username" className="form-label">
                                                    Email
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    value={email}
                                                    id="email"
                                                    placeholder="Enter username"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <div className="float-end">
                                                    <a href="auth-recoverpw.html" className="text-muted">
                                                        Forgot password?
                                                    </a>
                                                </div>
                                                <label htmlFor="userpassword" className="form-label">
                                                    Password
                                                </label>
                                                <div className="position-relative auth-pass-inputgroup mb-3">
                                                    <input
                                                        type="password"
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        value={password}
                                                        className="form-control pe-5"
                                                        placeholder="Enter Password"
                                                        id="password-input"
                                                    />
                                                    <button
                                                        className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                                                        type="button"
                                                        onClick={() => {
                                                            var e = document.getElementById("password-input");
                                                            "password" === e.type ? e.type = "text" : e.type = "password"
                                                        }}
                                                        id="password-addon"
                                                    >
                                                        <i className="ri-eye-fill align-middle"/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="form-check form-check-info font-size-16">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="remember-check"
                                                />
                                                <label
                                                    className="form-check-label font-size-14"
                                                    htmlFor="remember-check"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                            <div className="text-center mt-4">
                                                <button className="btn btn-primary w-100" type="submit">
                                                    Log In
                                                </button>
                                            </div>
                                            <div className="mt-4 text-center">
                                                <div className="signin-other-title">
                                                    <h5 className="font-size-14 mb-4 title">
                                                        Sign in with
                                                    </h5>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div>
                                                            <button
                                                                type="button"
                                                                className="btn btn-light w-100"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-trigger="hover"
                                                                data-bs-placement="top"
                                                                title="Facebook"
                                                            >
                                                                <i className="mdi mdi-facebook text-indigo"/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div>
                                                            <button
                                                                type="button"
                                                                className="btn btn-light w-100"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-trigger="hover"
                                                                data-bs-placement="top"
                                                                title="Google"
                                                            >
                                                                <i className="mdi mdi-google text-danger"/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        {/* end form */}
                                        <div className="mt-5 text-center text-muted">
                                            <p>
                                                Don't have an account ?
                                                <Link to={`/auth/register`} className={`fw-medium text-decoration-underline`}>
                                                    {" "}
                                                    Register
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* end col */}
                            </div>
                            {/* end row */}
                            {/* end row */}
                        </div>
                    </div>
                </div>
                {/* end col */}
            </div>
            {/* end row */}
        </div>
        {/* end container-fluid */}
    </div>)
}

export default LoginForm;