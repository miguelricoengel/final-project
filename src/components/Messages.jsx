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
    userName: post.author.userName, // Accedemos al nombre del usuario desde 'post.author'
  };
}

function Messages(quote) {
  const authorInfo = formatCreatedAt(quote); // Pasamos todo el objeto 'quote' a 'formatCreatedAt'

  return (
    <div className="scrollbar-track-blue-300 scrollbar-thumb-blue-500 w-full overflow-y-scroll p-5">
      <div className="rounded-lg border-4 border-blue-200 p-3">
        <p>{quote.text}</p>
      </div>
      <h3 className="text-gray-300">{authorInfo.date}</h3>
      <h3>{authorInfo.userName}</h3>
    </div>
  );
}

export default Messages;