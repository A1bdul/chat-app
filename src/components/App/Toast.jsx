import {useState, useEffect} from 'react';
import UserProfilePic from "../../assets/images/users/user-dummy-img.jpg"
export default function Toast({homeResponse}) {
    const [num, setNum] = useState(1);
    const [toasts, setToasts] = useState([])
    useEffect(() => {
        if (homeResponse && homeResponse.notification) {
            setToasts((prevState) => [...prevState, homeResponse])
        }
    }, [homeResponse]);
    useEffect(() => {
        const interval = setInterval(() => {
            setNum(num => num + 1);
        }, 60000);
        return () => clearInterval(interval); // This is to clear the interval when the component unmounts
    }, []);

    return (
        <div className="toast-container position-absolute p-3 top-0 end-0">
            {toasts.map(((notification, key) => {
                return <div key={key} className="toast show" role="alert" aria-live="polite" aria-atomic={true}>
                    <div className="toast-header">
                        {notification.sender.channel ? <span className=" rounded-circle bg-soft-light text-dark">
                    #
                  </span>: ""}
                        <strong
                            className="me-auto">{notification.sender.channel ? notification.sender.channel : notification.sender.name}</strong>
                        <small>{num} {num > 1 ? "m" : "s"} ago</small>
                        <button className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={() => {
                            const updatedList = [...toasts]
                            updatedList.splice(key, 1)
                            setToasts(updatedList)

                        }}></button>
                    </div>
                    <div className="toast-body">
                        {notification.sender.channel ? notification.sender.name + ": " + notification.sender.msg : notification.sender.msg}
                    </div>
                </div>
            }))}
        </div>
    );
}
