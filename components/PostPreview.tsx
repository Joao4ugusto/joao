import Link from "next/link"
import { PostMetadata } from "./PostMetadata"

export default function PostPreview(props: PostMetadata){
  return (
    <div key={props.slug}>
    <Link href={`./posts/${props.slug}`}>
    {/* <h2 className="dark:text-white text-color-black text-base ">{props.slug}</h2> */}
    <p className=" text-base font-bold dark:text-white pb-2 text-color-black ">{props.title}</p>
    <p className=" text-base dark:text-color-font-secundaria  text-color-black/80 ">{props.subtitle}</p>
    <p className=" text-sm font-normal dark:text-color-font-secundaria text-color-black/80 pb-5">{props.date}</p>
    </Link>
  </div>
  )
}