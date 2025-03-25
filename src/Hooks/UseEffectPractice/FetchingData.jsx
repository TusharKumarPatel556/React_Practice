import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchingData = () => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("response", res.data.length);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {post ? (
        <div>
          <ul>
            {post.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default FetchingData;
