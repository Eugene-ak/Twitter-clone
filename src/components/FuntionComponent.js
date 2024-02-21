import { useEffect, useState } from "react"
import { getPosts } from "../hooks/useFetch";

export default function TestFunctionComponent() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPost = async () => {
    setIsLoading(true);
    const data = await getPosts();
    if (data.status === 200 && data?.data) {
      setPosts(data.data.splice(0, 10));
      setIsLoading(false);
      setError(null);        
    } else {
      setPosts(data.data.splice(0, 10));
      setIsLoading(false);
      setError(null);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <main>
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {posts && posts.length !== 0 &&
          posts.map((post) => {
            return (
              <div key={post.id}>
                <h2 className="post-title text-2xl font-bold">{post.title}</h2>
                <p className="post-body">{post.body}</p>
                <p className="post-author">
                  This post was created by user id {post.userId}
                </p>
              </div>
            );
          })}
      </main>
  )
};
