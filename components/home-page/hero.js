import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/vidoje.jpg"
          alt="An Image of me"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Vidoje</h1>
      <p>This is blog about React and NextJS</p>
    </section>
  );
}
export default Hero;
