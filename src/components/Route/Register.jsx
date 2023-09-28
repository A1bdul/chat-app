import useDocumentTitle from "../App/changeDocument.jsx";

function Register() {

    const getUserRegistered = async  () => {
        await axios.post()
    }
    useDocumentTitle("Register| ChatApp")

    return <div className="auth-bg">
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-xl-3 col-lg-4">
                    <div className="p-4 pb-0 p-lg-5 pb-lg-0 auth-logo-section">
                        <div className="text-white-50">
                            <h3>
                                <a href="index.html" className="text-white">
                                    <i className="bx bxs-message-alt-detail align-middle text-white h3 mb-1 me-2"/>{" "}
                                    Doot
                                </a>
                            </h3>
                            <p className="font-size-16">Responsive Bootstrap 5 Chat App</p>
                        </div>
                        <div className="mt-auto">
                            <img src="assets/images/auth-img.png" alt="" className="auth-img"/>
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
                                            <h3>Register Account</h3>
                                            <p className="text-muted">
                                                Get your free Doot account now.
                                            </p>
                                        </div>
                                        <form
                                            className="needs-validation"
                                            noValidate=""
                                            onSubmit={getUserRegistered}
                                        >
                                            <div className="mb-3">
                                                <label htmlFor="useremail" className="form-label">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="useremail"
                                                    placeholder="Enter email"
                                                    required=""
                                                />
                                                <div className="invalid-feedback">Please Enter Email</div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="username" className="form-label">
                                                    Username
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    placeholder="Enter username"
                                                    required=""
                                                />
                                                <div className="invalid-feedback">
                                                    Please Enter Username
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="userpassword" className="form-label">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="userpassword"
                                                    placeholder="Enter password"
                                                    required=""
                                                />
                                                <div className="invalid-feedback">
                                                    Please Enter Password
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <p className="mb-0">
                                                    By registering you agree to the Doot{" "}
                                                    <a href="#" className="text-primary">
                                                        Terms of Use
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="mb-3">
                                                <button
                                                    className="btn btn-primary w-100 waves-effect waves-light"
                                                    type="submit"
                                                >
                                                    Register
                                                </button>
                                            </div>
                                            <div className="mt-4 text-center">
                                                <div className="signin-other-title">
                                                    <h5 className="font-size-14 mb-4 title">
                                                        Sign up using
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
                                                Already have an account ?{" "}
                                                <a
                                                    href="/auth/login"
                                                    className="fw-medium text-decoration-underline"
                                                >
                                                    Login
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* end col */}
                            </div>
                            {/* end row */}
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="text-center text-muted p-4">
                                        <p className="mb-0">
                                            © Doot. Crafted with{" "}
                                            <i className="mdi mdi-heart text-danger"/> by Themesbrand
                                        </p>
                                    </div>
                                </div>
                                {/* end col */}
                            </div>
                            {/* end row */}
                        </div>
                    </div>
                </div>
                {/* end col */}
            </div>
            {/* end row */}
        </div>
        {/* end container-fluid */}
    </div>

}

export default Register;
