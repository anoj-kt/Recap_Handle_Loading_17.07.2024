import { useEffect, useState } from 'react';
import { fetchPosts } from '../data/fetchData';
import Post from './Post';
import { PostListSkeleton } from './Skeletons';
import Error from './Error';

const PostList = () => {
  const [postsData, setPostsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setPostsData(data);
      })
      .catch(() => setIsError(true))
      .finally(() => {
        //This code runs after the Promise has returned (either resolved or rejected)
        //Thus makes sense to set loading to false here
        setIsLoading(false);
      });
  }, []);

  if (isError) return <Error message='Failed to fetch posts' />;

  return (
    <section>
      <h2 className='text-2xl font-bold text-center'>Posts</h2>
      {isLoading ? (
        <PostListSkeleton />
      ) : (
        postsData.map((post) => <Post key={post.id} post={post} />)
      )}
    </section>
  );
};

export default PostList;
