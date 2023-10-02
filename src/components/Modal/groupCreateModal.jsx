import {useState} from "react";

// eslint-disable-next-line react/prop-types
export default function GroupCreateModal({contactsList, handleClickSendMessage}) {
    const [groupForm, setGroupForm] = useState({name: "", groupMembers: [], description: ""})
    const {name, groupMembers, description} = groupForm
    const handleGroupFormChange = (e) => {
        const {name, value} = e.target;
        if (name === "groupMembers") {
            const isChecked = e.target.checked;
            const newMembers = isChecked ? [...groupMembers, value] : groupMembers.filter((member) => member !== value)
            setGroupForm({...groupForm, groupMembers: newMembers})
        } else setGroupForm({...groupForm, [name]: value})
    }
    return <div
        className="modal fade"
        id="addgroup-exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="addgroup-exampleModalLabel"
        aria-hidden="true"
    >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content modal-header-colored shadow-lg border-0">
                <div className="modal-header">
                    <h5
                        className="modal-title text-white font-size-16"
                        id="addgroup-exampleModalLabel"
                    >
                        Create New Group
                    </h5>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>

                <form onSubmit={(event) => {
                    event.preventDefault();
                    handleClickSendMessage("channel_create", groupForm)
                    setGroupForm({name: "", groupMembers: [], description: ""})
                }}>
                    <div className="modal-body p-4" data-simplebar="" style={{maxHeight: 450}}>
                        <div>
                            <div className="mb-4">
                                <label htmlFor="addgroupname-input" className="form-label">
                                    Group Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={handleGroupFormChange}
                                    className="form-control"
                                    id="addgroupname-input"
                                    placeholder="Enter Group Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Group Members</label>
                                <div className="mb-3">
                                    <button
                                        className="btn btn-light btn-sm"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#groupmembercollapse"
                                        aria-expanded="false"
                                        aria-controls="groupmembercollapse"
                                    >
                                        Select Members
                                    </button>
                                </div>
                                <div className="collapse" id="groupmembercollapse">
                                    <div className="card border">
                                        <div className="card-header">
                                            <h5 className="font-size-15 mb-0">Contacts</h5>
                                        </div>
                                        <div className="card-body p-2">
                                            <div data-simplebar="" style={{maxHeight: 150}}>
                                                <div>
                                                    {Object.keys(contactsList).map(key => {
                                                        let contacts = contactsList[key]
                                                        return (<div key={key}>
                                                            <div className="contact-list-title">{key}</div>
                                                            <ul className="list-unstyled contact-list">
                                                                {/* eslint-disable-next-line react/prop-types */}
                                                                {contacts.map((user) => {
                                                                    return (<li key={user.id}>
                                                                            <div className="form-check">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="groupMembers"
                                                                                    value={user.id}
                                                                                    onChange={handleGroupFormChange}
                                                                                    className="form-check-input"
                                                                                    id={`memberCheck${user.id}`}
                                                                                    checked={groupMembers.includes(user.id)}
                                                                                />
                                                                                <label
                                                                                    className="form-check-label"
                                                                                    htmlFor={`memberCheck${user.id}`}
                                                                                >
                                                                                    {user.first_name} {" "} {user.last_name}
                                                                                </label>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                })}
                                                            </ul>
                                                        </div>)
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="addgroupdescription-input"
                                    className="form-label"
                                >
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    id="addgroupdescription-input"
                                    rows={3}
                                    placeholder="Enter Description"
                                    name="description"
                                    value={description}
                                    onChange={handleGroupFormChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-link"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                            Create Groups
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </div>
}