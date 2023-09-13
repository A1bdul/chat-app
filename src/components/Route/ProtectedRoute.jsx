import {Navigate} from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login.jsx";

function PrivateRoute({isAuthenticated, children,}) {
        console.log(isAuthenticated)
        if (children.type === Home){
            return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace/>
        }
        else if(children.type === Login){
            return !isAuthenticated ? <>{children}</> : <Navigate to="/" replace/>
        }
}
export default PrivateRoute;