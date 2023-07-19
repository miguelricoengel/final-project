import PropTypes from "prop-types";
import Messages from "./Messages";
import Pics from "./Pics";
import Songs from "./AddSong";

function formatCreatedAt(post) {
  const date = new Date(post.createdAt);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return {
    date: date.toLocaleString("en-US", options),
    userName: post.author.userName,
  };
} // Add a closing curly brace here

function All({ dashboard }) {
  // The dashboard object contains all the data received from the parent component

  return (
    <div className="ml-40 flex-row items-center justify-center max-w-md xl:ml-100">
      <h2 className="text-lg text-blue-500">All Posts</h2>
      <br />
      {dashboard && dashboard.posts
        ? dashboard.posts
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((post) => {
              const authorInfo = formatCreatedAt(post);
              return (
                <div key={post._id}>
                  <div className="scrollbar-track-blue-300 scrollbar-thumb-blue-500 w-full overflow-y-scroll p-5">
                    <div className="rounded-lg border-4 border-blue-200 p-3">
                      {post.format === "Song" && <Songs {...post.idContent} />}
                      {post.format === "Quote" && <Messages {...post.idContent} />}
                      {post.format === "Image" && <Pics {...post.idContent} />}
                      <div>
                        <h3 className="text-gray-300">{authorInfo.date}</h3>
                        <h3>{authorInfo.userName}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
        : null}
    </div>
  );
} // Remove the extra closing curly brace here

All.propTypes = {
  dashboard: PropTypes.shape({
    // Specify the correct shape of the 'dashboard' prop
    posts: PropTypes.array.isRequired,
  }).isRequired,
};

export default All;