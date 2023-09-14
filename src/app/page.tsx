import PostPreview from "../../components/PostPreview";
import React from "react";
import getPostMetadate from "../../../site-joao/components/getPostMetadata"

export default function Page() {
  const postMetadata = getPostMetadate();
  const postPreview: React.ReactNode[] = postMetadata
    .slice(0, 3)
    .map((post) => (
      <div key={post.slug} className=" mb-5 sy:mb-1 relative sy:p-3 sy:hover:bg-zinc-600/10 sy:dark:hover:bg-zinc-600/20 sy:rounded">
        <PostPreview key={post.slug} {...post} />
      </div>
    ));

  return (
    <div className=" px-6 py-28 md:px-[95px] mf:px-[118px] sy:px-[142px] lg:px-40 lg:py-40 xl:px-[323px] 2xl:py-40 2xl:px-[410px]">
      <div>
        <h1 className="dark:text-white text-color-black pb-8 text-lg font-bold">João Augusto</h1>
        <p className=" dark:text-color-font-secundaria text-color-black/95  pb-8 font-normal text-base leading-6">I m a Brazilian software engineer, in addition to being a computer science student. My main area of ​​focus is static software development, with an emphasis on creating compelling and scalable solutions.</p>
        <p className=" dark:text-color-font-secundaria text-color-black/95  pb-8 font-normal text-base leading-6">Currently, I am committed to a continuous study of the principles of data structures and algorithms. If you re interested, you can follow along with my <a className=" underline underline-offset-4 hover:text-color-black/80 dark:hover:text-color-font-secundaria/60" href="https://github.com/Joao4ugusto/Data-Structure-and-Algorithm">repository</a>.</p>
        <p className=" dark:text-color-font-secundaria text-color-black/95  pb-14 font-normal text-base leading-6">Sometimes I write articles covering various topics in the field of technology on <a className=" underline underline-offset-4 hover:text-color-black/80 dark:hover:text-color-font-secundaria/60" href="https://dev.to/joao31oliveira">dev.to</a>.</p>
      </div>
      <div className="">
        <h2 className="dark:text-white pb-8 text-color-black text-base font-bold">Blog</h2>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 md:w-1 rounded bg-zinc-600/10 dark:bg-zinc-600/20"></div>
          <div className="md:ml-3">
            {postPreview}
          </div>
        </div>

        <div>
          <h3 className="  text-base font-bold dark:text-white pb-5 text-color-black pt-14">Codes Open source</h3>

        </div>
      </div>

    </div>
  );
}
