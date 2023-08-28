import AllPosts from '@/components/posts/all-posts';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a React framework for production - it makes building fullstack apps easy.',
    date: '2023-08-28',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a React framework for production - it makes building fullstack apps easy.',
    date: '2023-08-28',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a React framework for production - it makes building fullstack apps easy.',
    date: '2023-08-28',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a React framework for production - it makes building fullstack apps easy.',
    date: '2023-08-28',
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
export default AllPostsPage;
