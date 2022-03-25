import React, { useState } from "react";
import axios from "axios";
import { encodedToken } from "../../token";
import { usePlaylist } from "../../contexts";
import styles from "./Modal.module.css";

export const Modal = () => {
  const [showInput, setShowInput] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState("");
  const [loading, setLoading] = useState(false);
  const { closeModal, playlists, playlistDispatch } = usePlaylist();

  const handleInputChange = (event) => {
    setNewPlaylist(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const {
        data: { playlists },
      } = await axios.post(
        "/api/user/playlists",
        {
          playlist: { title: newPlaylist },
        },
        {
          headers: { authorization: encodedToken },
        }
      );

      playlistDispatch({ type: "SET_PLAYLIST", payload: playlists });
      setLoading(false);
      setShowInput(false);
      setNewPlaylist("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`${styles.modal__container} flex-row flex-center`}>
      <div className={`${styles.container} p-1 rounded-sm flex-column`}>
        <div
          className={`${styles.header} flex-row items-center content-space-between py-1 mx-1`}
        >
          <span className="text-base">Save to...</span>
          <button onClick={closeModal}>
            <span className="material-icons-outlined">close</span>
          </button>
        </div>

        <div className="pt-1 px-1 flex-column">
          <label htmlFor="watch-later">
            <input type="checkbox" id="watch-later" className="my-1 mr-1" />{" "}
            Watch later
          </label>

          <label htmlFor="saved-videos">
            <input type="checkbox" id="saved-videos" className="my-1 mr-1" />{" "}
            Saved Videos
          </label>

          {playlists.map(({ _id, title }) => (
            <label htmlFor={_id}>
              <input type="checkbox" id={_id} className="my-1 mr-1" /> {title}
            </label>
          ))}
        </div>

        {showInput ? (
          <form onSubmit={handleFormSubmit} className="flex-column mt-1">
            <input
              required
              type="text"
              value={newPlaylist}
              onChange={handleInputChange}
              placeholder="add new playlist.."
              className="border rounded-sm p-1 text-base"
            />
            <button className="p-1 text-base">
              {loading ? "Create..." : "Create"}
            </button>
          </form>
        ) : (
          <button
            onClick={() => setShowInput(true)}
            className="flex-row items-center content-space-between pb-1 mr-1"
          >
            <span
              className={`${styles.add__icon} material-icons-outlined mr-1`}
            >
              add
            </span>
            <span className="text-base">Create a new playlist</span>
          </button>
        )}
      </div>
    </div>
  );
};
