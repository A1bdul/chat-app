import useDocumentTitle from "../App/changeDocument.jsx";
import axios from "axios";
import {Formik} from "formik";
import * as Yup from "yup"
import {Link} from "react-router-dom";

function Register() {
    const getUserRegistered = async (values, errors) => {
        // values["re_password"] = values.password
        // const response = await axios.post(`${import.meta.env.VITE_BACKEND_API}auth/users/.`, values, {
        //     headers: {
        //         "Content-Type": 'application/json'
        //     }
        // })
        // console.log(response)

        console.log("Sucess! Call the API Now")
    }

    const validationSchema = Yup.object().shape({
        first_name: Yup.string()
            .required("Please enter first name"),
        last_name: Yup.string()
            .required("Please enter last name"),
        email: Yup.string()
            .email("Please enter a valid email")
            .required("Email is required"),
        password: Yup.string()
            .required("password is required")
            .min(8, "Password too short, Must be at least 8 characters.")
    })

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
                                    ChatApp
                                </a>
                            </h3>
                            <p className="font-size-16"></p>
                        </div>
                        <div className="mt-auto">
                            <img src="../../assets/images/auth-img.png" alt="" className="auth-img"/>
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
                                                Get your account now.
                                            </p>
                                        </div>
                                        <Formik initialValues={{
                                            first_name: '',
                                            last_name: '',
                                            email: '',
                                            password: ''
                                        }} onSubmit={(values, errors) => {
                                            getUserRegistered(values, errors)
                                        }} validationSchema={validationSchema}>
                                            {({values, errors, handleSubmit, touched, handleChange, handleBlur}) => {
                                                return (<form
                                                    className="needs-validation"
                                                    noValidate=""
                                                    onSubmit={handleSubmit}
                                                >
                                                    <div className="mb-3">
                                                        <label htmlFor="useremail" className="form-label">
                                                            First Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className={`form-control ${touched.first_name && !errors.first_name ? "is-valid" : ""}`}
                                                            placeholder="Enter First Name"
                                                            onChange={handleChange("first_name")}
                                                            value={values.first_name}
                                                            onBlur={handleBlur("first_name")}
                                                        />
                                                        <div
                                                            className="invalid-feedback d-block">{touched.first_name && errors.first_name}
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="lastname" className="form-label">
                                                            Last Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className={`form-control ${touched.last_name && !errors.last_name ? "is-valid" : ""}`}
                                                            onChange={handleChange("last_name")}
                                                            placeholder="Enter Last Name"
                                                            value={values.last_name}
                                                            onBlur={handleBlur("last_name")}
                                                        />
                                                        <div className="invalid-feedback d-block">
                                                            {touched.last_name && errors.last_name}
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="useremail" className="form-label">
                                                            Email
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className={`form-control ${touched.email && !errors.email ? "is-valid" : ""}`}
                                                            onChange={handleChange("email")}
                                                            placeholder="Enter Email"
                                                            value={values.email}
                                                            onBlur={handleBlur("email")}
                                                        />
                                                        <div className="invalid-feedback d-block">
                                                            {touched.email && errors.email}
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="userpassword" className="form-label">
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className={`form-control ${touched.password && !errors.password ? "is-valid" : ""}`}
                                                            onChange={handleChange("password")}
                                                            placeholder="Enter password"
                                                            value={values.password}
                                                            onBlur={handleBlur("password")}
                                                        />
                                                        <div className="invalid-feedback  d-block">
                                                            {touched.password && errors.password}
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
                                                </form>)
                                            }}

                                        </Formik>
                                        {/* end form */}
                                        <div className="mt-5 text-center text-muted">
                                            <p>
                                                Already have an account ?{" "}
                                                <Link
                                                    to="/auth/login"
                                                    className="fw-medium text-decoration-underline"
                                                >
                                                    Login
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
    </div>

}

export default Register;
