"use client"
import { useState } from "react"
import { Cross1Icon, HomeIcon, FileTextIcon, CodeIcon, GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"

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
    <aside onClick={onClose} className={` sy:hidden fixed backdrop-blur-sm backdrop-brightness-90 top-0 left-0 ${open ? "w-full h-full ":"-ml-96"} `}>
      <div className={` h-full  bg-white dark:bg-black transition-all duration-500  py-6 px-5 ${open ? "w-[80%] md:w-[40%] sm:w-[70%]" : " -ml-96"} `}>
        <div onClick={onClose} className=" px-2 pb-16">
          <Cross1Icon width={18} className=' text-black dark:text-white' />
        </div>
        <h1 className=" px-2 pb-5 dark:text-color-font-principal text-color-black text-base font-semibold">João Augusto</h1>
        
        <div className="">
  <div className="pb-1">
    <a
      href="#"
      onClick={Bot1}
      className={`block px-2 py-3 ${
        Botao1
          ? "bg-gradient-to-r from-green-200/80 via-green-300/80 to-blue-500/80 rounded-lg dark:bg-gradient-to-r dark:from-green-200/20 dark:via-green-300/20 dark:to-blue-500/20"
          : "dark:bg-transparent bg-transparent"
      }`}
    >
      <div className="transform-gpu flex items-center gap-5">
        <HomeIcon width={18} className="text-black dark:text-white" />
        <div>
          <p className="text-black dark:text-white">Home</p>
        </div>
      </div>
    </a>
  </div>
  <div className="pb-1">
    <a
      href="#"
      onClick={Bot2}
      className={`block p-2 py-3 ${
        Botao2
          ? "bg-gradient-to-r from-green-200/80 via-green-300/80 to-blue-500/80 rounded-lg dark:bg-gradient-to-r dark:from-green-200/20 dark:via-green-300/20 dark:to-blue-500/20"
          : "dark:bg-transparent bg-transparent"
      }`}
    >
      <div className="transform-gpu flex items-center gap-5">
        <FileTextIcon width={18} className="text-black dark:text-white" />
        <div>
          <p className="text-black dark:text-white">written</p>
        </div>
      </div>
    </a>
  </div>
  <div className="pb-1">
    <a
      href="#"
      onClick={Bot3}
      className={`block px-2 py-3 ${
        Botao3
          ? "bg-gradient-to-r from-green-200/80 via-green-300/80 to-blue-500/80 rounded-lg dark:bg-gradient-to-r dark:from-green-200/20 dark:via-green-300/20 dark:to-blue-500/20"
          : "dark:bg-transparent bg-transparent"
      }`}
    >
      <div className="transform-gpu flex items-center gap-5">
        <CodeIcon width={18} className="text-black dark:text-white" />
        <div>
          <p className="text-black dark:text-white">Studies</p>
        </div>
      </div>
    </a>
  </div>
</div> 
    <h2 className=" py-5 px-2 pb-8 dark:text-color-font-principal text-color-black text-base font-semibold">Social</h2>
    <div className=" pb-1">
    <a href="https://github.com/Joao4ugusto" className=" flex items-center gap-5  px-2 py-3 dark:hover:bg-gradient-to-r dark:from-green-200/20  dark:via-green-300/20  dark:to-blue-500/20  hover:bg-gradient-to-r from-green-200/40 via-green-300/40 to-blue-500/40  hover:rounded-lg">
    <GitHubLogoIcon width={18} className=' text-black dark:text-white' />
    <div>
          <p className="text-black dark:text-white">Github</p>
    </div>
    </a>
    <a href='https://twitter.com/Joao4ugusto' className="flex items-center gap-5 px-2 py-3 dark:hover:bg-gradient-to-r dark:from-green-200/20  dark:via-green-300/20  dark:to-blue-500/20  hover:bg-gradient-to-r from-green-200/40 via-green-300/40 to-blue-500/40  hover:rounded-lg">
    <TwitterLogoIcon width={18} className=' text-black dark:text-white' />
    <div>
        <p className="text-black dark:text-white">Twitter</p>
    </div>
    </a>
    <a href='https://twitter.com/Joao4ugusto' className=" cursor-pointer hidden sy:flex sy:p-3 dark:sy:hover:bg-gradient-to-r dark:from-green-200/20  dark:via-green-300/20  dark:to-blue-500/20  sy:hover:bg-gradient-to-r from-green-200/40 via-green-300/40 to-blue-500/40   hover:rounded-lg">
      <div className="transform-gpu flex items-center gap-5">
        <TwitterLogoIcon width={18} className=' text-black dark:text-white' />
        <div>
        <p className="text-black dark:text-white">Twitter</p>
    </div>
      </div>
    </a>
    </div>
      </div>
    </aside>
  );
}
