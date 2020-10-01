import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyes from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyes.headingMd}>
        <p>Hi, I'm Michaela. I'm a web developer looking for a job. I would love to work
          on Frontend or Backend projects. I use Javascript/React and now Gatsby and next
          as well as Node/Express/MongoDB.
        </p>
        <p>
          (This is a sample website - you'll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
