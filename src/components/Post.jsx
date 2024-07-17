const Post = ({ post }) => {
  return (
    <div className='card bg-slate-600 shadow-xl m-4 h-96'>
      <figure>
        <img
          className='w-full h-36 object-cover aspect-square'
          src={post.image}
          alt={post.title}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-white'>{post.title}</h2>
        <p className=' text-white'>{post.content}</p>
      </div>
    </div>
  );
};

export default Post;
