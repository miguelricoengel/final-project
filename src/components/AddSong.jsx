import { useState } from "react";
import PropTypes from "prop-types";

function AddSong({ onAddPlaylist }) {
  const [playlistUrl, setPlaylistUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPlaylist(playlistUrl);

    setPlaylistUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="link">Want to add another playlist?</label>
        <input
          className="mb-4 m-2 w-full rounded-full border bg-[#38bcf9] bg-opacity-25 p-2 text-sm text-white outline-none transition duration-150 ease-in-out"
          placeholder="Paste embed Spotify link here"
          type="text"
          id="playlistUrl"
          value={playlistUrl}
          onChange={(e) => setPlaylistUrl(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-gray focus:border-blue rounded-full border-[#38bcf9] px-4 py-2 text-sm text-[#38bcf9]"
        >
          Add new!
        </button>
      </div>
    </form>
  );
}

AddSong.propTypes = {
  onAddPlaylist: PropTypes.func.isRequired,
};

function Songs() {
  const [playlists, setPlaylists] = useState([
    "https://open.spotify.com/embed/playlist/45QeMk03Q51ytyL7Wucrqc?utm_source=generator",
  ]);

  const handleAddPlaylist = (playlistUrl) => {
    setPlaylists([...playlists, playlistUrl]);
  };

  const handleDeletePlaylist = (index) => {
    const updatedPlaylists = [...playlists];
    updatedPlaylists.splice(index, 1);
    setPlaylists(updatedPlaylists);
  };

  return (
    <>
      {playlists.map((playlistUrl, index) => (
        <div key={index} className="relative">
          <iframe
            style={{ borderRadius: "12px", backgroundColor: "transparent" }}
            src={playlistUrl}
            width="100%"
            height="500"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="p-3 m-2 border-4 rounded-full"
          ></iframe>
          <button
            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
            onClick={() => handleDeletePlaylist(index)}
          >
            Delete
          </button>
        </div>
      ))}
      <br />
      <AddSong onAddPlaylist={handleAddPlaylist} />
    </>
  );
}

export default Songs;
