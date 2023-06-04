import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";

const Blog: NextPage = ({ posts }: any) => {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Grimoire Blog </title>
      </Head>

      <h1 className="mb-8 text-3xl font-bold">Grimoire Blog </h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
};

function PostCard(post) {
  return (
    <div className="mb-6">
      <time dateTime={post.date} className="block text-sm text-slate-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <h2 className="text-lg">
        <Link href={post.url}>
          <p className="text-blue-700 hover:text-blue-900">{post.title}</p>
        </Link>
      </h2>
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}
