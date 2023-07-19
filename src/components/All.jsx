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
}

function All({ dashboard }) {
  return (
    <div className="ml-40 flex-row items-center justify-center max-w-md xl:ml-100">
      <h2 className="text-lg text-blue-500">All Posts</h2>
      <br />
      {dashboard && dashboard.posts
        ? dashboard.posts
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((post) => {
              const { date, userName } = formatCreatedAt(post);
              return (
                <div key={post._id}>
                  <div className="scrollbar-track-blue-300 scrollbar-thumb-blue-500 w-full overflow-y-scroll p-5">
                    <div className="rounded-lg border-4 border-blue-200 p-3">
                      {post.format === "Song" && <Songs {...post.idContent} />}
                      {post.format === "Quote" && <Messages {...post.idContent} />}
                      {post.format === "Image" && <Pics {...post.idContent} />}
                      <div>
                        <h3 className="text-gray-300">{date}</h3>
                        <h3>{userName}</h3> {/* Mostramos el userName del autor aquí */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
        : null}
    </div>
  );
}

All.propTypes = {
  dashboard: PropTypes.shape({
    posts: PropTypes.array.isRequired,
  }).isRequired,
};

export default All;
