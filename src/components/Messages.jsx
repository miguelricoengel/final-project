function Messages(quote) {
  function formatCreatedAt(createdAt) {
    const date = new Date(createdAt);

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };

    return {
      date: date.toLocaleString("en-US", options),
      userName: quote.userName,
    };
  }

  const authorInfo = typeof quote.createdAt === 'string' ? formatCreatedAt(quote.createdAt) : null;

  return (
    <div className="scrollbar-track-blue-300 scrollbar-thumb-blue-500 w-full overflow-y-scroll p-5">
      <div className="rounded-lg border-4 border-blue-200 p-3">
        <p className="whitespace-normal">{quote.text}</p>
        {authorInfo && (
          <p className="text-gray-500">
            Posted by {authorInfo.userName} on {authorInfo.date}
          </p>
        )}
      </div>
    </div>
  );
}

export default Messages;
