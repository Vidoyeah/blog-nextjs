const { Fragment } = require('react');

import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';

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

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}
export default HomePage;
