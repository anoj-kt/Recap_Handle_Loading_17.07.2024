import './App.css';
import AddPostForm from './components/AddPostForm';
import PostList from './components/PostList';

function App() {
  return (
    <main className='w-96 m-auto'>
      <PostList />
      <AddPostForm />
    </main>
  );
}

export default App;
