import fs from "fs";
import Markdown from "markdown-to-jsx"
import matter from "gray-matter";
import getPostMetadata from "../../../../components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = `posts/`;
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file , 'utf-8');
  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug
  }))
}

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className=" px-6 py-28 md:px-[95px] mf:px-[118px] sy:px-[142px] lg:px-40 lg:py-40 xl:px-[323px] 2xl:py-40 2xl:px-[410px]">
     <h1 className=" dark:text-white pb-5 text-color-black text-base font-bold">{post.data.title}</h1>
     <Markdown>{post.content}</Markdown>
  </div>
  );
}