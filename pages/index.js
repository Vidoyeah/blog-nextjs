import Head from 'next/head';

import { Fragment } from 'react';

import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';
import { getFeaturedPosts } from '@/lib/posts-util';

function HomePage(props) {
  console.log(props.posts);
  return (
    <Fragment>
      <Head>
        <title>Vidoje's Blog</title>
        <meta
          name="description"
          content="I post about NextJS"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}
export default HomePage;

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return { props: { posts: featuredPosts } };
}
