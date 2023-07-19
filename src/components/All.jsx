import PropTypes from "prop-types";
import Messages from "./Messages";
import Pics from "./Pics";

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
    <div className="flex flex-col items-center justify-center">
      {/* <h2 className="text-lg text-blue-500">All Posts</h2> */}
      <div className="p-4flex flex-col items-center justify-center space-y-4">
        {dashboard && dashboard.posts
          ? dashboard.posts
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((post) => {
                const { date, userName } = formatCreatedAt(post);
                return (
                  <div key={post._id}>
                    {/* {post.format === "Song" && <Songs {...post.idContent} />} */}
                    {post.format === "Quote" && <Messages {...post.idContent} />}
                    {post.format === "Image" && <Pics {...post.idContent} />}
                    <div>
                      <h3 className="text-gray-300">{date}</h3>
                      <h3>{userName}</h3>
                    </div>
                  </div>
                );
              })
          : null}
      </div>
    </div>
  );
}

All.propTypes = {
  dashboard: PropTypes.shape({
    posts: PropTypes.array.isRequired,
  }).isRequired,
};

export default All;
