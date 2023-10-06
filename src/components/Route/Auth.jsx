import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

export default function ActivateAccount() {
    const {uid, token} = useParams();
    const history = useNavigate()

    useEffect(() => {
        const newPath = "/account/activate"
        history(newPath, {replace: true})
        console.log(uid)
        axios.post(`${import.meta.env.VITE_BACKEND_API}auth/users/activation/.`, {
            uid: uid, token: token
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => console.log(response))
    }, [token, uid]);

    return <><p>Authenticating</p></>
}