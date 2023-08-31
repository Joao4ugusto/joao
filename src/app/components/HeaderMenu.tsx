"use client"
import { useState } from 'react'
import Link from 'next/link'
import { TextAlignLeftIcon , HomeIcon ,  FileTextIcon , CodeIcon, GitHubLogoIcon , TwitterLogoIcon , SunIcon , MoonIcon , AvatarIcon} from "@radix-ui/react-icons"

type Props = {
  openSidebarClick: () => void;
  tema: boolean;
  tema2: boolean;
  on1: () => void;
  on2: () => void;
};

export default function HeaderMenu({
  openSidebarClick,
  tema,
  tema2,
  on1,
  on2,
}: Props){
  
  const [botao1, setBotao1] = useState(false);
  const [botao2, setBotao2] = useState(false);
  const [botao3, setBotao3] = useState(false);

  const bot1 = () => {
    setBotao1(true);
    setBotao2(false);
    setBotao3(false);
  };

  const bot2 = () => {
    setBotao1(false);
    setBotao2(true);
    setBotao3(false);
  };

  const bot3 = () => {
    setBotao1(false);
    setBotao2(false);
    setBotao3(true);
  };

 
  return(
    <header className={` top-0 py-6 px-6 md:px-[92px] mf:px-28 sy:px-32 lg:px-36 lg:py-4 xl:px-[310px] xl:py-4 2xl:px-[400px] 2xl:py-4 fixed w-full ${tema ? " bg-white bg-[url('../../public/fundo3.svg')] sy:bg-[url('../../public/fundo2.svg')]" : "bg-color-black bg-[url('../../public/fundo.svg')]"}`}>
      <div className=" flex justify-between items-center">
        < div onClick={openSidebarClick}  className=" focus:outline-none sy:hidden " >
          <TextAlignLeftIcon width={18} height={18} className=' text-black dark:text-white' />
        </div>
        <div className="  gap-1 md:hidden sy:flex">
          <div className="gap-1 md:hidden sy:flex">
            <Link
              href="/"
              onClick={bot1}
              className={`hidden sy:flex sy:p-3 ${botao1
                ? "sy:bg-gradient-to-r dark:from-green-200/20 dark:via-green-300/20 dark:to-blue-500/20 sy:hover:bg-gradient-to-r from-green-200/40 via-green-300/40 to-blue-500/40 rounded"
                : "dark:hover:sy:bg-gradient-to-r dark:from-green-200/20 dark:via-green-300/20 dark:to-blue-500/20 sy:hover:bg-gradient-to-r from-green-200/40 via-green-300/40 to-blue-500/40 rounded"
                }`}
            >
              <div className="transform-gpu">
                {<HomeIcon width={18} className=' text-black dark:text-white' />}
              </div>
            </Link>
            <Link
              href="/blog"
              onClick={bot2}
              className={`hidden sy:flex sy:p-3 ${botao2
                ? "sy:bg-gradient-to-r dark:from-green-200/20 dark:via-green-300/20 dark:to-blue-500/20 sy:hover:bg-gradient-to-r from-green-200/40 via-green-300/40 to-blue-500/40 rounded"
                : "dark:hover:sy:bg-gradient-to-r dark:from-green-200/20 dark:via-green-300/20 dark:to-blue-500/20 sy:hover:bg-gradient-to-r from-green-200/40 via-green-300/40 to-blue-500/40 rounded"
                }`}
            >
              <div className="transform-gpu">
                {<FileTextIcon width={18} className=' text-black dark:text-white' />}
              </div>
            </Link>
            <Link
              href="/codes"
              onClick={bot3}
              className={`hidden sy:flex sy:p-3 ${botao3
                ? "sy:bg-gradient-to-r dark:from-green-200/20 dark:via-green-300/20 dark:to-blue-500/20 sy:hover:bg-gradient-to-r from-green-200/40 via-green-300/40 to-blue-500/40 rounded"
                : "dark:hover:sy:bg-gradient-to-r dark:from-green-200/20 dark:via-green-300/20 dark:to-blue-500/20 sy:hover:bg-gradient-to-r from-green-200/40 via-green-300/40 to-blue-500/40 rounded"
                }`}
            >
              <div className="transform-gpu">
                {<CodeIcon width={18} className=' text-black dark:text-white' />}
              </div>
            </Link>
          </div>
          <p className=" hidden md:flex p-2 text-color-font-secundaria">|</p>
          <a href='https://github.com/Joao4ugusto' className=" cursor-pointer hidden sy:flex sy:p-3 dark:sy:hover:bg-gradient-to-r dark:from-green-200/20  dark:via-green-300/20  dark:to-blue-500/20  sy:hover:bg-gradient-to-r from-green-200/40 via-green-300/40 to-blue-500/40   hover:rounded ">
            <div className="transform-gpu">
              <GitHubLogoIcon width={18} className=' text-black dark:text-white' />
            </div>
          </a>
          <a href='https://twitter.com/Joao4ugusto' className=" cursor-pointer hidden sy:flex sy:p-3 dark:sy:hover:bg-gradient-to-r dark:from-green-200/20  dark:via-green-300/20  dark:to-blue-500/20  sy:hover:bg-gradient-to-r from-green-200/40 via-green-300/40 to-blue-500/40   hover:rounded">
            <div className="transform-gpu">
              <TwitterLogoIcon width={18} className=' text-black dark:text-white' />
            </div>
          </a>
          <p className=" hidden md:flex p-2 text-color-font-secundaria">|</p>

          <div className=" flex dark:bg-white/5 bg-black/5 rounded">
            <button onClick={on1} className={`flex p-3 ${tema ? 'dark:bg-gradient-to-r dark:from-green-200/20  dark:via-green-300/20  dark:to-blue-500/20  bg-gradient-to-r from-green-200/60 via-green-300/60 to-blue-500/60 rounded' : ' bg-none'} `}>
              <SunIcon width={18} className=' text-black dark:text-white' />
            </button>
            <button onClick={on2} className={`flex p-3 ${tema2 ? 'dark:bg-gradient-to-r dark:from-green-200/20  dark:via-green-300/20  dark:to-blue-500/20  bg-gradient-to-r from-green-200/60 via-green-300/60 to-blue-500/60 rounded' : ' bg-none'} `}>
              <MoonIcon name='MoonIcon' width={18} className=' text-black dark:text-white' />
            </button>
          </div>

        </div>
        <div className=" cursor-pointer sy:flex sy:p-3 dark:sy:hover:bg-gradient-to-r dark:from-green-200/20  dark:via-green-300/20  dark:to-blue-500/20  sy:hover:bg-gradient-to-r from-green-200/40 via-green-300/40 to-blue-500/40  hover:rounded inline-block">
          <div className="transform-gpu focus:outline-none ">
            <AvatarIcon width={16} className=' focus:outline-none text-black dark:text-white ' />
          </div>
        </div>
      </div>
    </header>
  )
}
