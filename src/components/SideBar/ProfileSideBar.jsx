import userBackground from "../../assets/images/small/img-2.jpg"

function ProfileSideBar({tabChange, userInfo}) {
    return <>
        {/* Start Profile tab-pane */}
        <div
            className="tab-pane show active"
            id="pills-user"
            role="tabpanel"
            aria-labelledby="pills-user-tab"
        >
            {/* Start profile content */}
            <div>
                <div className="user-profile-img">
                    <img
                        src={userBackground}
                        className="profile-img"
                        style={{height: 160}}
                        alt=""
                    />
                    <div className="overlay-content">
                        <div>
                            <div className="user-chat-nav p-2 ps-3">
                                <div className="d-flex w-100 align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="text-white mb-0">My Profile</h5>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div className="dropdown">
                                            <button
                                                className="btn nav-btn text-white dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i className="bx bx-dots-vertical-rounded"/>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a
                                                    className="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#"
                                                >
                                                    Info <i className="bx bx-info-circle ms-2 text-muted"/>
                                                </a>
                                                <a
                                                    className="dropdown-item d-flex align-items-center justify-content-between"
                                                    onClick={() => tabChange('Settings')}
                                                >
                                                    Setting <i className="bx bx-cog text-muted ms-2"/>
                                                </a>
                                                <div className="dropdown-divider"/>
                                                <a
                                                    className="dropdown-item d-flex align-items-center justify-content-between"
                                                    href="#"
                                                >
                                                    Help <i className="bx bx-help-circle ms-2 text-muted"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3 p-lg-4 border-bottom pt-2 pt-lg-2 mt-n5 position-relative">
                    <div className="mb-lg-3 mb-2">
                        <img
                            src=".../assets/images/users/avatar-1.jpg"
                            className="rounded-circle avatar-lg img-thumbnail"
                            alt=""
                        />
                    </div>
                    <h5 className="font-size-16 mb-1 text-truncate">{userInfo['first_name']} {userInfo['last_name']}</h5>
                    <p className="text-muted font-size-14 text-truncate mb-0">
                        Front end Developer
                    </p>
                </div>
                {/* End profile user */}
                {/* Start user-profile-desc */}
                <div className="p-4 profile-desc" data-simplebar="">
                    <div className="text-muted">
                        <p className="mb-4">
                            If several languages coalesce, the grammar of the resulting language
                            is more simple.
                        </p>
                    </div>
                    <div>
                        <div className="d-flex py-2">
                            <div className="flex-shrink-0 me-3">
                                <i className="bx bx-user align-middle text-muted"/>
                            </div>
                            <div className="flex-grow-1">
                                <p className="mb-0">Adam Zampa</p>
                            </div>
                        </div>
                        <div className="d-flex py-2">
                            <div className="flex-shrink-0 me-3">
                                <i className="bx bx-message-rounded-dots align-middle text-muted"/>
                            </div>
                            <div className="flex-grow-1">
                                <p className="mb-0">adc@email.com</p>
                            </div>
                        </div>
                        <div className="d-flex py-2">
                            <div className="flex-shrink-0 me-3">
                                <i className="bx bx-location-plus align-middle text-muted"/>
                            </div>
                            <div className="flex-grow-1">
                                <p className="mb-0">California, USA</p>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4"/>
                    <div>
                        <div className="d-flex">
                            <div className="flex-grow-1">
                                <h5 className="font-size-11 text-muted text-uppercase">Media</h5>
                            </div>
                            <div className="flex-shrink-0">
                                <a href="#" className="font-size-12 d-block mb-2">
                                    Show all
                                </a>
                            </div>
                        </div>
                        <div className="profile-media-img">
                            <div className="media-img-list">
                                <a href="#">
                                    <img
                                        src="assets/images/small/img-1.jpg"
                                        alt="media img"
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                            <div className="media-img-list">
                                <a href="#">
                                    <img
                                        src="assets/images/small/img-2.jpg"
                                        alt="media img"
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                            <div className="media-img-list">
                                <a href="#">
                                    <img
                                        src="assets/images/small/img-4.jpg"
                                        alt="media img"
                                        className="img-fluid"
                                    />
                                    <div className="bg-overlay">+ 15</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4"/>
                    <div>
                        <div>
                            <h5 className="font-size-11 text-muted text-uppercase mb-3">
                                Attached Files
                            </h5>
                        </div>
                        <div>
                            <div className="card p-2 border mb-2 bg-transparent">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 avatar-xs ms-1 me-3">
                                        <div className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                            <i className="bx bx-file"/>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                        <h5 className="font-size-14 text-truncate mb-1">
                                            design-phase-1-approved.pdf
                                        </h5>
                                        <p className="text-muted font-size-13 mb-0">12.5 MB</p>
                                    </div>
                                    <div className="flex-shrink-0 ms-3">
                                        <div className="d-flex gap-2">
                                            <div>
                                                <a href="#" className="text-muted px-1">
                                                    <i className="bx bxs-download"/>
                                                </a>
                                            </div>
                                            <div className="dropdown">
                                                <a
                                                    className="dropdown-toggle text-muted px-1"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="bx bx-dots-horizontal-rounded"/>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a
                                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                                        href="#"
                                                    >
                                                        Share{" "}
                                                        <i className="bx bx-share-alt ms-2 text-muted"/>
                                                    </a>
                                                    <a
                                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                                        href="#"
                                                    >
                                                        Bookmark{" "}
                                                        <i className="bx bx-bookmarks text-muted ms-2"/>
                                                    </a>
                                                    <div className="dropdown-divider"/>
                                                    <a
                                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                                        href="#"
                                                    >
                                                        Delete <i className="bx bx-trash ms-2 text-muted"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-2 border mb-2 bg-transparent">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 avatar-xs ms-1 me-3">
                                        <div className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                            <i className="bx bx-image"/>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                        <h5 className="font-size-14 text-truncate mb-1">
                                            Image-1.jpg
                                        </h5>
                                        <p className="text-muted font-size-13 mb-0">4.2 MB</p>
                                    </div>
                                    <div className="flex-shrink-0 ms-3">
                                        <div className="d-flex gap-2">
                                            <div>
                                                <a href="#" className="text-muted px-1">
                                                    <i className="bx bxs-download"/>
                                                </a>
                                            </div>
                                            <div className="dropdown">
                                                <a
                                                    className="dropdown-toggle text-muted px-1"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="bx bx-dots-horizontal-rounded"/>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a
                                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                                        href="#"
                                                    >
                                                        Share{" "}
                                                        <i className="bx bx-share-alt ms-2 text-muted"/>
                                                    </a>
                                                    <a
                                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                                        href="#"
                                                    >
                                                        Bookmark{" "}
                                                        <i className="bx bx-bookmarks text-muted ms-2"/>
                                                    </a>
                                                    <div className="dropdown-divider"/>
                                                    <a
                                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                                        href="#"
                                                    >
                                                        Delete <i className="bx bx-trash ms-2 text-muted"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-2 border mb-2 bg-transparent">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 avatar-xs ms-1 me-3">
                                        <div className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                            <i className="bx bx-image"/>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                        <h5 className="font-size-14 text-truncate mb-1">
                                            Image-2.jpg
                                        </h5>
                                        <p className="text-muted font-size-13 mb-0">3.1 MB</p>
                                    </div>
                                    <div className="flex-shrink-0 ms-3">
                                        <div className="d-flex gap-2">
                                            <div>
                                                <a href="#" className="text-muted px-1">
                                                    <i className="bx bxs-download"/>
                                                </a>
                                            </div>
                                            <div className="dropdown">
                                                <a
                                                    className="dropdown-toggle text-muted px-1"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="bx bx-dots-horizontal-rounded"/>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a
                                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                                        href="#"
                                                    >
                                                        Share{" "}
                                                        <i className="bx bx-share-alt ms-2 text-muted"/>
                                                    </a>
                                                    <a
                                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                                        href="#"
                                                    >
                                                        Bookmark{" "}
                                                        <i className="bx bx-bookmarks text-muted ms-2"/>
                                                    </a>
                                                    <div className="dropdown-divider"/>
                                                    <a
                                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                                        href="#"
                                                    >
                                                        Delete <i className="bx bx-trash ms-2 text-muted"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-2 border mb-2 bg-transparent">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 avatar-xs ms-1 me-3">
                                        <div className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                            <i className="bx bx-file"/>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                        <h5 className="font-size-14 text-truncate mb-1">
                                            Landing-A.zip
                                        </h5>
                                        <p className="text-muted font-size-13 mb-0">6.7 MB</p>
                                    </div>
                                    <div className="flex-shrink-0 ms-3">
                                        <div className="d-flex gap-2">
                                            <div>
                                                <a href="#" className="text-muted px-1">
                                                    <i className="bx bxs-download"/>
                                                </a>
                                            </div>
                                            <div className="dropdown">
                                                <a
                                                    className="dropdown-toggle text-muted px-1"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="bx bx-dots-horizontal-rounded"/>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a
                                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                                        href="#"
                                                    >
                                                        Share{" "}
                                                        <i className="bx bx-share-alt ms-2 text-muted"/>
                                                    </a>
                                                    <a
                                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                                        href="#"
                                                    >
                                                        Bookmark{" "}
                                                        <i className="bx bx-bookmarks text-muted ms-2"/>
                                                    </a>
                                                    <div className="dropdown-divider"/>
                                                    <a
                                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                                        href="#"
                                                    >
                                                        Delete <i className="bx bx-trash ms-2 text-muted"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end user-profile-desc */}
            </div>
            {/* End profile content */}
        </div>
        {/* End Profile tab-pane */}
    </>


}

export default ProfileSideBar