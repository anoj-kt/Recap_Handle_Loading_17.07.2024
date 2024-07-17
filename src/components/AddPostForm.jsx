import { useState } from 'react';
import { addPost } from '../data/fetchData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPostForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await addPost();
      toast.success(response, {
        position: 'top-center',
        theme: 'colored',
      });
    } catch (error) {
      toast.error('Failed to post!', {
        position: 'top-center',
        theme: 'colored',
      });
    }

    setIsLoading(false);
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Title'
          className='input input-bordered w-full mb-2'
          disabled={isLoading}
        />
        <textarea
          name=''
          id=''
          className='textarea textarea-bordered w-full'
          placeholder='Content'
          disabled={isLoading}
        />
        <button className='btn' disabled={isLoading}>
          {isLoading && <span className='loading loading-spinner'></span>}
          Add Post
        </button>
      </form>
    </>
  );
};

export default AddPostForm;
