import Messages from "./Messages";
import Pics from "./Pics";
import Songs from "./AddSong";
import axios from "axios";

function All() {

  const posts = [

    
  ];
    
  return (
          <div>
            <h1>All Posts</h1>
            {posts.map((post) => (
              <div key={post._id}>
                <h3>{post.format}</h3>
                {/* Display the content based on the format */}
                {post.format === "Song" && <Songs {...post.idContent} />}
                {post.format === "Quote" && <Messages {...post.idContent} />}
                {post.format === "Image" && <Pics {...post.idContent} />}
              </div>
            ))}
          </div>
        );
      }
  
  export default All;
  