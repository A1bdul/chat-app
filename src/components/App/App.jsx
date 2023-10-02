import '../../assets/css/app.min.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/icons.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginForm from "../Route/Login.jsx";
import Home from "../Route/Home.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import PrivateRoute from "../Route/ProtectedRoute.jsx";
import Register from "../Route/Register.jsx";


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, isLoading] = useState(true)

    async function checkAccess() {
        const token = localStorage.getItem("access_token")
        if (token) {
            try {
                const response = await axios.post(`${import.meta.env.VITE_BACKEND_API}auth/jwt/verify/.`,
                    {
                        token: `${token}`
                    }
                )
                if (response.status === 200) {
                    setIsAuthenticated(true)

                }
            } catch (e) {
                setIsAuthenticated(false)
            }
        } else {
            setIsAuthenticated(false)
        }
        isLoading(false)
    }

    useEffect(() => {
        checkAccess();
    });
    if (loading) return <></>
    return (
        <Router>
            <Routes>
                <Route path="/auth/login" element={
                    <PrivateRoute isAuthenticated={isAuthenticated}>
                        <LoginForm setIsAuthenticated={setIsAuthenticated}/>
                    </PrivateRoute>}/>
                <Route path="/" element={
                    <PrivateRoute isAuthenticated={isAuthenticated}>
                        <Home/>
                    </PrivateRoute>}/>
                <Route path="/auth/register" element={<PrivateRoute isAuthenticated={isAuthenticated}>
                    <Register/>
                </PrivateRoute>}/>
            </Routes>
        </Router>
    )
}


export default App;
