import {useState} from "react";

function SettingsSideBar({userInfo, setUserInfo}) {

    const [editUserName, setEditUsername] = useState(false)
    const changeUsername = (e)=>{
        const name= e.target.value.split(" ")
        for(let n of name)  {
            if (n == " ") n = "abc.."
        }
        setUserInfo({...userInfo, first_name: name[0] , last_name: name[1]})}

    return <>
        {/* Start settings tab-pane */}
        <div
            className="tab-pane show active"
            id="pills-setting"
            role="tabpanel"
            aria-labelledby="pills-setting-tab"
        >
            {/* Start Settings content */}
            <div>
                <div className="user-profile-img">
                    <img
                        src="assets/images/small/img-4.jpg"
                        className="profile-img profile-foreground-img"
                        style={{height: 160}}
                        alt=""
                    />
                    <div className="overlay-content">
                        <div>
                            <div className="user-chat-nav p-3">
                                <div className="d-flex w-100 align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="text-white mb-0">Settings</h5>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div
                                            className="avatar-xs p-0 rounded-circle profile-photo-edit"
                                            data-bs-toggle="tooltip"
                                            data-bs-trigger="hover"
                                            data-bs-placement="bottom"
                                            title="Change Background"
                                        >
                                            <input
                                                id="profile-foreground-img-file-input"
                                                type="file"
                                                className="profile-foreground-img-file-input"
                                            />
                                            <label
                                                htmlFor="profile-foreground-img-file-input"
                                                className="profile-photo-edit avatar-xs"
                                            >
                      <span className="avatar-title rounded-circle bg-light text-body">
                        <i className="bx bxs-pencil"/>
                      </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3 p-lg-4 border-bottom pt-2 pt-lg-2 mt-n5 position-relative">
                    <div className="mb-3 profile-user">
                        <img
                            src="assets/images/users/avatar-1.jpg"
                            className="rounded-circle avatar-lg img-thumbnail user-profile-image"
                            alt="user-profile-image"
                        />
                        <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                            <input
                                id="profile-img-file-input"
                                type="file"
                                className="profile-img-file-input"
                            />
                            <label
                                htmlFor="profile-img-file-input"
                                className="profile-photo-edit avatar-xs"
                            >
              <span className="avatar-title rounded-circle bg-light text-body">
                <i className="bx bxs-camera"/>
              </span>
                            </label>
                        </div>
                    </div>
                    <h5 className="font-size-16 mb-1 text-truncate"/>
                    <div className="dropdown d-inline-block">
                        <a
                            className="text-muted dropdown-toggle d-block"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <i className="bx bxs-circle text-success font-size-10 align-middle"/>{" "}
                            Active <i className="mdi mdi-chevron-down"/>
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                                <i className="bx bxs-circle text-success font-size-10 me-1 align-middle"/>{" "}
                                Active
                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="bx bxs-circle text-warning font-size-10 me-1 align-middle"/>{" "}
                                Away
                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="bx bxs-circle text-danger font-size-10 me-1 align-middle"/>{" "}
                                Do not disturb
                            </a>
                        </div>
                    </div>
                </div>
                {/* End profile user */}
                {/* Start User profile description */}
                <div className="user-setting" data-simplebar="">
                    <div id="settingprofile" className="accordion accordion-flush">
                        <div className="accordion-item">
                            <div className="accordion-header" id="headerpersonalinfo">
                                <button
                                    className="accordion-button font-size-14 fw-medium"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#personalinfo"
                                    aria-expanded="true"
                                    aria-controls="personalinfo"
                                >
                                    <i className="bx bxs-user text-muted me-3"/> Personal Info
                                </button>
                            </div>
                            <div
                                id="personalinfo"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headerpersonalinfo"
                                data-bs-parent="#settingprofile"
                            >
                                <div className="accordion-body">
                                    <div className="float-end">
                                        <button type="button" className="btn btn-soft-primary btn-sm">
                                            <i className={`bx ${editUserName ? "bx-check" : "bxs-pencil"} align-middle`} onClick={()=> {
                                                setEditUsername(!editUserName)
                                                document.getElementById("editUserName")
                                            }}/>
                                        </button>
                                    </div>
                                    <div>
                                        <p className="text-muted mb-1">Name</p>
                                        {editUserName ? <input id="editUserName" style={{border:"none"}} value={`${userInfo["first_name"]} ${userInfo["last_name"]}`} onChange={changeUsername}></input> : <h5 className="font-size-14" id="edit-name">{userInfo['first_name']} {userInfo['last_name']}</h5>}
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-muted mb-1">Email</p>
                                        <h5 className="font-size-14">{userInfo["email"]}</h5>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-muted mb-1">Location</p>
                                        <h5 className="font-size-14 mb-0">California, USA</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end personal info card */}
                        <div className="accordion-item">
                            <div className="accordion-header" id="headerthemes">
                                <button
                                    className="accordion-button font-size-14 fw-medium collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapsethemes"
                                    aria-expanded="false"
                                    aria-controls="collapsethemes"
                                >
                                    <i className="bx bxs-adjust-alt text-muted me-3"/> Themes
                                </button>
                            </div>
                            <div
                                id="collapsethemes"
                                className="accordion-collapse collapse"
                                aria-labelledby="headerthemes"
                                data-bs-parent="#settingprofile"
                            >
                                <div className="accordion-body">
                                    <div>
                                        <h5 className="mb-3 font-size-11 text-muted text-uppercase">
                                            Choose Theme Color :
                                        </h5>
                                        <div
                                            className="d-flex align-items-center flex-wrap gap-2 theme-btn-list theme-color-list">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input theme-color"
                                                    type="radio"
                                                    defaultValue={0}
                                                    name="bgcolor-radio"
                                                    id="bgcolor-radio1"
                                                />
                                                <label
                                                    className="form-check-label avatar-xs"
                                                    htmlFor="bgcolor-radio1"
                                                >
                                                    <span
                                                        className="avatar-title bg-primary-custom rounded-circle theme-btn bgcolor-radio1"/>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input theme-color"
                                                    type="radio"
                                                    defaultValue={1}
                                                    name="bgcolor-radio"
                                                    id="bgcolor-radio2"
                                                />
                                                <label
                                                    className="form-check-label avatar-xs"
                                                    htmlFor="bgcolor-radio2"
                                                >
                                                    <span
                                                        className="avatar-title bg-info rounded-circle theme-btn bgcolor-radio2"/>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input theme-color"
                                                    type="radio"
                                                    defaultValue={2}
                                                    name="bgcolor-radio"
                                                    id="bgcolor-radio4"
                                                />
                                                <label
                                                    className="form-check-label avatar-xs"
                                                    htmlFor="bgcolor-radio4"
                                                >
                                                    <span
                                                        className="avatar-title bg-purple rounded-circle theme-btn bgcolor-radio4"/>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input theme-color"
                                                    type="radio"
                                                    defaultValue={3}
                                                    name="bgcolor-radio"
                                                    id="bgcolor-radio5"
                                                />
                                                <label
                                                    className="form-check-label avatar-xs"
                                                    htmlFor="bgcolor-radio5"
                                                >
                                                    <span
                                                        className="avatar-title bg-pink rounded-circle theme-btn bgcolor-radio5"/>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input theme-color"
                                                    type="radio"
                                                    defaultValue={4}
                                                    name="bgcolor-radio"
                                                    id="bgcolor-radio6"
                                                />
                                                <label
                                                    className="form-check-label avatar-xs"
                                                    htmlFor="bgcolor-radio6"
                                                >
                                                    <span
                                                        className="avatar-title bg-danger rounded-circle theme-btn bgcolor-radio6"/>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input theme-color"
                                                    type="radio"
                                                    defaultValue={5}
                                                    name="bgcolor-radio"
                                                    id="bgcolor-radio7"
                                                />
                                                <label
                                                    className="form-check-label avatar-xs"
                                                    htmlFor="bgcolor-radio7"
                                                >
                                                    <span
                                                        className="avatar-title bg-secondary rounded-circle theme-btn bgcolor-radio7"/>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input theme-color"
                                                    type="radio"
                                                    defaultValue={6}
                                                    name="bgcolor-radio"
                                                    id="bgcolor-radio8"
                                                    defaultChecked=""
                                                />
                                                <label
                                                    className="form-check-label avatar-xs light-background"
                                                    htmlFor="bgcolor-radio8"
                                                >
                                                    <span
                                                        className="avatar-title bg-light rounded-circle theme-btn bgcolor-radio8"/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-2">
                                        <h5 className="mb-3 font-size-11 text-muted text-uppercase">
                                            Choose Theme Image :
                                        </h5>
                                        <div
                                            className="d-flex align-items-center flex-wrap gap-2 theme-btn-list theme-btn-list-img">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input theme-img"
                                                    type="radio"
                                                    name="bgimg-radio"
                                                    id="bgimg-radio1"
                                                />
                                                <label
                                                    className="form-check-label avatar-xs"
                                                    htmlFor="bgimg-radio1"
                                                >
                                                    <span
                                                        className="avatar-title bg-pattern-1 rounded-circle theme-btn bgimg-radio1"/>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input theme-img"
                                                    type="radio"
                                                    name="bgimg-radio"
                                                    id="bgimg-radio2"
                                                />
                                                <label
                                                    className="form-check-label avatar-xs"
                                                    htmlFor="bgimg-radio2"
                                                >
                                                    <span
                                                        className="avatar-title bg-pattern-2 rounded-circle theme-btn bgimg-radio2"/>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input theme-img"
                                                    type="radio"
                                                    name="bgimg-radio"
                                                    id="bgimg-radio3"
                                                />
                                                <label
                                                    className="form-check-label avatar-xs"
                                                    htmlFor="bgimg-radio3"
                                                >
                                                    <span
                                                        className="avatar-title bg-pattern-3 rounded-circle theme-btn bgimg-radio3"/>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input theme-img"
                                                    type="radio"
                                                    name="bgimg-radio"
                                                    id="bgimg-radio4"
                                                />
                                                <label
                                                    className="form-check-label avatar-xs"
                                                    htmlFor="bgimg-radio4"
                                                >
                                                    <span
                                                        className="avatar-title bg-pattern-4 rounded-circle theme-btn bgimg-radio4"/>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input theme-img"
                                                    type="radio"
                                                    name="bgimg-radio"
                                                    id="bgimg-radio5"
                                                    defaultChecked=""
                                                />
                                                <label
                                                    className="form-check-label avatar-xs"
                                                    htmlFor="bgimg-radio5"
                                                >
                                                    <span
                                                        className="avatar-title bg-pattern-5 rounded-circle theme-btn bgimg-radio5"/>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input theme-img"
                                                    type="radio"
                                                    name="bgimg-radio"
                                                    id="bgimg-radio6"
                                                />
                                                <label
                                                    className="form-check-label avatar-xs"
                                                    htmlFor="bgimg-radio6"
                                                >
                                                    <span
                                                        className="avatar-title bg-pattern-6 rounded-circle theme-btn bgimg-radio6"/>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input theme-img"
                                                    type="radio"
                                                    name="bgimg-radio"
                                                    id="bgimg-radio7"
                                                />
                                                <label
                                                    className="form-check-label avatar-xs"
                                                    htmlFor="bgimg-radio7"
                                                >
                                                    <span
                                                        className="avatar-title bg-pattern-7 rounded-circle theme-btn bgimg-radio7"/>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input theme-img"
                                                    type="radio"
                                                    name="bgimg-radio"
                                                    id="bgimg-radio8"
                                                />
                                                <label
                                                    className="form-check-label avatar-xs"
                                                    htmlFor="bgimg-radio8"
                                                >
                                                    <span
                                                        className="avatar-title bg-pattern-8 rounded-circle theme-btn bgimg-radio8"/>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input theme-img"
                                                    type="radio"
                                                    name="bgimg-radio"
                                                    id="bgimg-radio9"
                                                />
                                                <label
                                                    className="form-check-label avatar-xs"
                                                    htmlFor="bgimg-radio9"
                                                >
                                                    <span
                                                        className="avatar-title bg-pattern-9 rounded-circle theme-btn bgimg-radio9"/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header" id="privacy1">
                                <button
                                    className="accordion-button font-size-14 fw-medium collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#privacy"
                                    aria-expanded="false"
                                    aria-controls="privacy"
                                >
                                    <i className="bx bxs-lock text-muted me-3"/>
                                    Privacy
                                </button>
                            </div>
                            <div
                                id="privacy"
                                className="accordion-collapse collapse"
                                aria-labelledby="privacy1"
                                data-bs-parent="#settingprofile"
                            >
                                <div className="accordion-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item py-3 px-0 pt-0">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-13 mb-0 text-truncate">
                                                        Profile photo
                                                    </h5>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <select className="form-select form-select-sm">
                                                        <option value="Everyone" defaultValue="">
                                                            Everyone
                                                        </option>
                                                        <option value="Selected">Selected</option>
                                                        <option value="Nobody">Nobody</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-3 px-0">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-13 mb-0 text-truncate">
                                                        Last seen
                                                    </h5>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <div className="form-check form-switch">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="privacy-lastseenSwitch"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="privacy-lastseenSwitch"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-3 px-0">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-13 mb-0 text-truncate">
                                                        Status
                                                    </h5>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <select className="form-select form-select-sm">
                                                        <option value="Everyone" defaultValue="">
                                                            Everyone
                                                        </option>
                                                        <option value="Selected">Selected</option>
                                                        <option value="Nobody">Nobody</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-3 px-0">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-13 mb-0 text-truncate">
                                                        Read receipts
                                                    </h5>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <div className="form-check form-switch">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="privacy-readreceiptSwitch"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="privacy-readreceiptSwitch"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-3 px-0 pb-0">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-13 mb-0 text-truncate">
                                                        Groups
                                                    </h5>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <select className="form-select form-select-sm">
                                                        <option value="Everyone" defaultValue="">
                                                            Everyone
                                                        </option>
                                                        <option value="Selected">Selected</option>
                                                        <option value="Nobody">Nobody</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* end privacy card */}
                        <div className="accordion-item">
                            <div className="accordion-header" id="headersecurity">
                                <button
                                    className="accordion-button font-size-14 fw-medium collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapsesecurity"
                                    aria-expanded="false"
                                    aria-controls="collapsesecurity"
                                >
                                    <i className="bx bxs-check-shield text-muted me-3"/> Security
                                </button>
                            </div>
                            <div
                                id="collapsesecurity"
                                className="accordion-collapse collapse"
                                aria-labelledby="headersecurity"
                                data-bs-parent="#settingprofile"
                            >
                                <div className="accordion-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item p-0">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="font-size-13 mb-0 text-truncate">
                                                        Show security notification
                                                    </h5>
                                                </div>
                                                <div className="flex-shrink-0 ms-2">
                                                    <div className="form-check form-switch">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="security-notificationswitch"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="security-notificationswitch"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* end security card */}
                        <div className="accordion-item">
                            <div className="accordion-header" id="headerhelp">
                                <button
                                    className="accordion-button font-size-14 fw-medium collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapsehelp"
                                    aria-expanded="false"
                                    aria-controls="collapsehelp"
                                >
                                    <i className="bx bxs-help-circle text-muted me-3"/> Help
                                </button>
                            </div>
                            <div
                                id="collapsehelp"
                                className="accordion-collapse collapse"
                                aria-labelledby="headerhelp"
                                data-bs-parent="#settingprofile"
                            >
                                <div className="accordion-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item py-3 px-0 pt-0">
                                            <h5 className="font-size-13 mb-0">
                                                <a href="#" className="text-body d-block">
                                                    FAQs
                                                </a>
                                            </h5>
                                        </li>
                                        <li className="list-group-item py-3 px-0">
                                            <h5 className="font-size-13 mb-0">
                                                <a href="#" className="text-body d-block">
                                                    Contact
                                                </a>
                                            </h5>
                                        </li>
                                        <li className="list-group-item py-3 px-0 pb-0">
                                            <h5 className="font-size-13 mb-0">
                                                <a href="#" className="text-body d-block">
                                                    Terms &amp; Privacy policy
                                                </a>
                                            </h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end profile-setting-accordion */}
                </div>
                {/* End User profile description */}
            </div>
            {/* Start Settings content */}
        </div>
        {/* End settings tab-pane */}
    </>

}

export default SettingsSideBar;