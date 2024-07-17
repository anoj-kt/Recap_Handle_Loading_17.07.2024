const blogPosts = [
  {
    id: 1,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Dl7dLJTcpS2sRVRP69SAR1mYH3zEeN0W7g&s',
    title: 'Understanding React Hooks',
    content:
      'React Hooks provide a powerful way to use state and other React features without writing a class. They enable you to reuse stateful logic and manage component side effects in a more concise way.',
  },
  {
    id: 2,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqW41E4-1DEcNpoV2krp581TuZ0KqU0TuM4g&s',
    title: 'Getting Started with TypeScript',
    content:
      'TypeScript is a superset of JavaScript that adds static types and other features to improve the development process. It helps catch errors early and makes the code more readable and maintainable.',
  },
  {
    id: 3,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnpNdU7z0aLi1BaIOzwt7brRBWi1ij-GwMg&s',
    title: 'CSS Grid Layout: A Comprehensive Guide',
    content:
      'CSS Grid Layout is a two-dimensional layout system for the web. It allows you to create complex layouts with a simple and flexible syntax. This guide covers everything from basic concepts to advanced techniques.',
  },
];

const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(blogPosts);
      // reject('Failed to fetch');
    }, 2000);
  });
};

const addPost = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Post successful');
      // reject();
    }, 2000);
  });
};

export { fetchPosts, addPost };
