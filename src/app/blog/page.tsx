import React from "react";
import  getPostMetadate  from "../../../components/getPostMetadata"
import PostPreview from "../../../components/PostPreview";


const Page = () => {
  const postMetadata = getPostMetadate(); // Certifique-se de ter a função getPostmetadata definida
  const postPreview: React.ReactNode[] = postMetadata.map((post) => (
    <div key={post.slug}>
      <PostPreview key={post.slug}  {...post} />
    </div>
  ));
  return (
    <div className='px-6 py-28 md:px-[95px] mf:px-[118px] sy:px-[142px] lg:px-40 lg:py-40 xl:px-[323px] 2xl:py-40 2xl:px-[410px]'>
      <h1 className="dark:text-white pb-8 text-color-black text-base font-bold">writing</h1>
      <p></p>
      {postPreview} 
    </div>
  );
};

export default Page;





