import { useState, useEffect } from 'react';

export default function Toast() {
    const [num, setNum] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNum(num => num + 1);
        }, 1000);
        return () => clearInterval(interval); // This is to clear the interval when the component unmounts
    }, []);

    return (
        <div className="toast-container position-absolute p-3 top-0 end-0">
            <div className="toast" role="alert" aria-live="assertive" aria-atomic={true}>
                <div className="toast-header">
                    <strong className="me-auto">Bootstrap</strong>
                    <small>{num} mins ago</small>
                    <button className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    Hello, world! How are you doing today?
                </div>
            </div>
        </div>
    );
}
