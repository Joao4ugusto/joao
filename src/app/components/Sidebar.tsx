"use client"
import { useState } from "react"
import { Cross1Icon, HomeIcon, FileTextIcon, CodeIcon, GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link";

type props = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: props) {
   
  const [Botao1, setbotao1] = useState(true);
  const [Botao2, setbotao2] = useState(false);
  const [Botao3, setbotao3] = useState(false);

  const Bot1 = () => {
    setbotao1(true);
    setbotao2(false);
    setbotao3(false);
  };

  const Bot2 = () => {
    setbotao1(false);
    setbotao2(true);
    setbotao3(false);
  };

  const Bot3 = () => {
    setbotao1(false);
    setbotao2(false);
    setbotao3(true);
  };

  return (
    <aside onClick={onClose} className={`  fixed backdrop-blur-sm  top-0 left-0 ${open ? "w-full h-full ":"-ml-96"} `}>
      <div className={` h-full bg-white 2xl:bg-gray-100/60  dark:bg-black 2xl:dark:bg-black/30 transition-all duration-500  py-6 px-5 ${open ? "w-[80%] md:w-[40%] sm:w-[70%] 2xl:w-[20%]" : " -ml-96"} `}>
        <div onClick={onClose} className=" px-2 pb-16">
          <Cross1Icon width={18} className=' text-black dark:text-white' />
        </div>
        <h1 className=" px-2 pb-5 dark:text-color-font-principal text-color-black text-base font-semibold">João Augusto</h1>
        
        <div className="">
  <div className="pb-1">
    <Link
      href="/"
      onClick={Bot1}
      className={`block px-2 py-3 ${
        Botao1
          ? "hover:bg-black/5 rounded hover:dark:bg-white/5"
          : "hover:bg-black/5 rounded hover:dark:bg-white/5"
      }`}
    >
      <div className="transform-gpu flex items-center gap-5">
        <HomeIcon width={18} className="text-black dark:text-white" />
        <div>
          <p className="text-black dark:text-white">Home</p>
        </div>
      </div>
    </Link>
  </div>
  <div className="pb-1">
    <Link
      href="/blog"
      onClick={Bot2}
      className={`block p-2 py-3 ${
        Botao2
          ? " hover:bg-black/5 rounded hover:dark:bg-white/5"
          : "hover:bg-black/5 rounded hover:dark:bg-white/5"
      }`}
    >
      <div className="transform-gpu flex items-center gap-5">
        <FileTextIcon width={18} className="text-black dark:text-white" />
        <div>
          <p className="text-black dark:text-white">written</p>
        </div>
      </div>
    </Link>
  </div>
  <div className="pb-1">
    <Link
      href="/codes"
      onClick={Bot3}
      className={`block px-2 py-3 ${
        Botao3
          ? " hover:bg-black/5 rounded hover:dark:bg-white/5"
          : "hover:bg-black/5 rounded hover:dark:bg-white/5"
      }`}
    >
      <div className="transform-gpu flex items-center gap-5">
        <CodeIcon width={18} className="text-black dark:text-white" />
        <div>
          <p className="text-black dark:text-white">Studies</p>
        </div>
      </div>
    </Link>
  </div>
</div> 
    <h2 className=" py-5 px-2 pb-8 dark:text-color-font-principal text-color-black text-base font-semibold">Social</h2>
    <div className=" pb-1">
    <a href="https://github.com/Joao4ugusto" className=" flex items-center gap-5  px-2 py-3  hover:bg-black/5 rounded hover:dark:bg-white/5">
    <GitHubLogoIcon width={18} className=' text-black dark:text-white' />
    <div>
          <p className="text-black dark:text-white">Github</p>
    </div>
    </a>
    <a href='https://twitter.com/Joao4ugusto' className="flex items-center gap-5 px-2 py-3 hover:bg-black/5 rounded hover:dark:bg-white/5">
    <TwitterLogoIcon width={18} className=' text-black dark:text-white' />
    <div>
        <p className="text-black dark:text-white">Twitter</p>
    </div>
    </a>
    </div>
      </div>
    </aside>
  );
}
