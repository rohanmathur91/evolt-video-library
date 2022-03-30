import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, usePlaylist } from "../../contexts";
import { useModal } from "../../hooks";
import { Modal, Sidebar } from "../../components";
import styles from "./Profile.module.css";

export const Profile = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const { playlistDispatch } = usePlaylist();
  const { showModal, handleShowModal } = useModal();
  const { fullName, email } = user ?? {};

  const handleLogout = () => {
    updateUser(null);
    localStorage.removeItem("token");
    playlistDispatch({ type: "CLEAR_ALL_USER_VIDEOS" });
    navigate("/");
  };

  return (
    <>
      {showModal && (
        <Modal handleShowModal={handleShowModal}>
          <div
            onClick={(event) => event.stopPropagation()}
            className={`${styles.modal} p-1 pl-2 m-1 rounded-sm flex-column`}
          >
            <div className="flex-row items-center content-space-between">
              <h3 className="sub-header">Are you sure ?</h3>
              <button
                onClick={() => handleShowModal(false)}
                className={`${styles.close__btn} icon-container p-1 rounded-sm`}
              >
                <span className="material-icons-outlined mx-1">close</span>
              </button>
            </div>
            <p className={`${styles.message} mb-3 pr-1 text-sm`}>
              You won't be able to access your playlists after logout.
            </p>
            <div className="ml-auto mr-1 pb-1">
              <button
                onClick={() => handleShowModal(false)}
                className="btn-outlined font-sm p-1 mr-1 rounded-sm font-semibold transition-2"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="btn-solid font-sm p-1 rounded-sm font-semibold transition-2"
              >
                Logout
              </button>
            </div>
          </div>
        </Modal>
      )}

      <div className="flex-row">
        <Sidebar />
        <main
          className={`${styles.container} flex-column flex-center w-100 px-2`}
        >
          <div className="m-1">
            <h3 className={`${styles.title} mb-1`}>Your Profile</h3>
            <div className={`${styles.details}`}>
              <p className="mb-1">Name: {fullName || "Adarsh Balika"}</p>
              <p className="">Email: {email || "adarshbalika@gmail.com"}</p>
              <button
                onClick={() => handleShowModal(true)}
                className="btn-solid btn-form w-100 font-semibold transition-2 mt-2 rounded-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
