import './assets/css/bootstrap.min.css'
import './assets/css/app.min.css'
import './assets/css/icons.min.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginForm from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import PrivateRoute from "./components/ProtectedRoute.jsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, isloading] = useState(true)

    async function checkAccess() {
        const token = localStorage.getItem("access_token")
        if (token) {
            try {
                const response = await axios.post('http://localhost:8000/auth/jwt/verify.',
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
        isloading(false)
    }

    useEffect(() => {
        checkAccess();
    });
    if (loading) return <></>
    return (
        <Router>
            <Routes>
                <Route path="/login" element={
                    <PrivateRoute isAuthenticated={isAuthenticated} >
                        <LoginForm setIsAuthenticated={setIsAuthenticated} />
                    </PrivateRoute>}/>
                <Route path="/" element={
                    <PrivateRoute isAuthenticated={isAuthenticated}>
                        <Home />
                    </PrivateRoute>}/>
            </Routes>
        </Router>
    )
}


export default App;
