import PropTypes from "prop-types";
import Messages from "./Messages";
import Pics from "./Pics";
import Songs from "./AddSong";

function All({ dashboard }) {
  // The dashboard object contains all the data received from the parent component

  return (
    <div>
      <h1>All Posts</h1>
      {dashboard && dashboard.posts
        ? dashboard.posts
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)) // Sort posts by timestamp in descending order
            .map((post) => (
              <div key={post._id}>
                <h3>{post.format}</h3>
                {/* Display the content based on the format */}
                {post.format === "Song" && <Songs {...post.idContent} />}
                {post.format === "Quote" && <Messages {...post.idContent} />}
                {post.format === "Image" && <Pics {...post.idContent} />}
              </div>
            ))
        : null}
    </div>
  );
}
All.propTypes = {
  dashboard: PropTypes.func.isRequired,
};
export default All;
