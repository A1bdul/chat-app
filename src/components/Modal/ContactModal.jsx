function ContactModal({contactsList, connectChatSocket, socketClose, setActiveChat}) {
    return <>
        {/* contactModal */}
        <div className="modal fade contactModal" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content modal-header-colored shadow-lg border-0">
                    <div className="modal-header">
                        <h5 className="modal-title text-white font-size-16">Contacts</h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body p-4">
                        <div className="input-group mb-4">
                            <input
                                type="text"
                                className="form-control bg-light border-0 pe-0"
                                placeholder="Search here.."
                                id="searchContactModal"
                                // onkeyup="searchContactOnModal()"
                                aria-label="Example text with button addon"
                                aria-describedby="contactSearchbtn-addon"
                            />
                            <button
                                className="btn btn-light"
                                type="button"
                                id="contactSearchbtn-addon"
                            >
                                <i className="bx bx-search align-middle"/>
                            </button>
                        </div>
                        <div className="d-flex align-items-center px-1">
                            <div className="flex-grow-1">
                                <h4 className=" font-size-11 text-muted text-uppercase">
                                    Contacts
                                </h4>
                            </div>
                        </div>
                        <div
                            className="contact-modal-list mx-n4 px-1"
                            data-simplebar=""
                            style={{maxHeight: 200}}
                        >
                            <div>
                                {Object.keys(contactsList).map((key => {
                                    let contacts = contactsList[key]
                                    return <div key={key} className="mt-3">
                                        <div className="contact-list-title">{key}</div>

                                        <ul className="list-unstyled contact-list">
                                            {contacts.map(((contact, key) => {
                                                return <li key={key} onClick={
                                                    () => {
                                                        socketClose();
                                                        connectChatSocket("users", contact.id, contact);
                                                        setActiveChat(contact.id);
                                                    }
                                                } data-bs-dismiss="modal">
                                                    <div>
                                                        <h5 className="font-size-14 m-0">{contact.first_name} {" "} {contact.last_name}</h5>
                                                    </div>
                                                </li>
                                            }))}
                                        </ul>
                                    </div>
                                    {/* end contact list A */
                                    }
                                }))}
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-link"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>
                        <button type="button" className="btn btn-primary">
                            <i className="bx bxs-send align-middle"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {/* contactModal */}
    </>

}

export default ContactModal;
