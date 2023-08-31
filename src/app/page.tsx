import PostPreview from "../../components/PostPreview";
import React from "react";
import  getPostMetadate  from "../../../site-joao/components/getPostMetadata"

export default function Page() {
  const postMetadata = getPostMetadate(); 
  const postPreview: React.ReactNode[] = postMetadata.map((post) => (
    <div key={post.slug}>
      <PostPreview key={post.slug}  {...post} />
    </div>
  ));
 
  return (
    <div className=" px-6 py-28 md:px-[95px] mf:px-[118px] sy:px-[142px] lg:px-40 lg:py-40 xl:px-[323px] 2xl:py-40 2xl:px-[410px]">
    <div>
      <h1 className="dark:text-white text-color-black pb-8 text-base font-bold">João Augusto</h1>
      <p className=" dark:text-color-font-secundaria text-color-black/95  pb-10 font-normal text-base leading-6">I m a Brazilian software engineer, in addition to being a computer science student. My main area of ​​focus is static software development, with an emphasis on creating compelling and scalable solutions.</p>
      <p className=" dark:text-color-font-secundaria text-color-black/95  pb-10 font-normal text-base leading-6">Currently, I am committed to a continuous study of the principles of data structures and algorithms. If you re interested, you can follow along with my <a className=" underline underline-offset-4 hover:text-color-black/80 dark:hover:text-color-font-secundaria/60" href="https://github.com/Joao4ugusto/Data-Structure-and-Algorithm">repository</a>.</p>
      <p className=" dark:text-color-font-secundaria text-color-black/95 pb-20 font-normal text-base leading-6">Sometimes I write articles covering various topics in the field of technology on <a className=" underline underline-offset-4 hover:text-color-black/80 dark:hover:text-color-font-secundaria/60" href="https://dev.to/joao31oliveira">dev.to</a>.</p>
    </div>
    <div>
      <h2 className="dark:text-white pb-5 text-color-black text-base font-bold">writing</h2>
      {postPreview} 
    </div>
  </div>
  );
}
