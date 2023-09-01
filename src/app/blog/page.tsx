import React from "react";
import  getPostMetadate  from "../../../components/getPostMetadata"
import PostPreview from "../../../components/PostPreview";


const Page = () => {
  const postMetadata = getPostMetadate(); // Certifique-se de ter a função getPostmetadata definida
  const postPreview: React.ReactNode[] = postMetadata.map((post) => (
    <div key={post.slug} className=" mb-5 sy:mb-1 relative sy:p-3 sy:hover:bg-zinc-600/10 sy:dark:hover:bg-zinc-600/20 sy:rounded">
      <PostPreview key={post.slug}  {...post} />
    </div>
  ));
  return (
    <div className='px-6 py-28 md:px-[95px] mf:px-[118px] sy:px-[142px] lg:px-40 lg:py-40 xl:px-[323px] 2xl:py-40 2xl:px-[410px]'>
      <h1 className="dark:text-white pb-8 text-color-black text-base font-bold">Blog</h1>
      <p className=" dark:text-white text-color-black text-base pt-2 pb-12">A bunch of tech and programming stuff mixed in with me talking about coffee and music, personal experiences and other nerdy nonsense.</p>
      <div className=" relative">
        <div className=" absolute inset-y-0 left-0 md:w-1 rounded bg-zinc-600/10 dark:bg-zinc-600/20"></div>
        <div className="md:ml-3">
        {postPreview} 
        </div>
      </div>
    </div>
  );
};

export default Page;





