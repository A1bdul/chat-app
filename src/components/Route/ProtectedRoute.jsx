import {Navigate} from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

function PrivateRoute({isAuthenticated, children,}) {
        if (children.type === Home){
            return isAuthenticated ? <>{children}</> : <Navigate to="/auth/login" replace/>
        }
        else if(children.type === Login){
            return !isAuthenticated ? <>{children}</> : <Navigate to="/" replace/>
        }
        else if(children.type === Register){
            return !isAuthenticated ? <>{children}</> : <Navigate to="/" replace/>
        }
}
export default PrivateRoute;