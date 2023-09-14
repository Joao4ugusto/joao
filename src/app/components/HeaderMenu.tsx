"use client"
import { useState } from 'react'
import Link from 'next/link'
import { HomeIcon ,  FileTextIcon , CodeIcon, GitHubLogoIcon , TwitterLogoIcon , SunIcon , MoonIcon , TextAlignRightIcon, ComponentBooleanIcon} from "@radix-ui/react-icons"

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
  
  const [botao1, setBotao1] = useState(true);
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
    <header className={` top-0 py-6 px-6 md:px-[92px] mf:px-28 sy:px-32 lg:px-36 lg:py-4 xl:px-[310px] xl:py-4 2xl:px-[400px] 2xl:py-4 fixed w-full ${tema ? " bg-white" : "bg-color-black"}`}>
      <div className=" flex justify-between items-center">
        < div className=" focus:outline-none sy:hidden " >
          <ComponentBooleanIcon width={20} height={20} className=' text-black dark:text-white' />
        </div>
        <div className="  gap-1 md:hidden sy:flex">
          <div className="gap-1 md:hidden sy:flex">
            <Link
              href="/"
              onClick={bot1}
              className={`hidden sy:flex sy:p-3 ${botao1
                ? ""
                : ""
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
                ? ""
                : ""
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
                ? ""
                : ""
                }`}
            >
              <div className="transform-gpu">
                {<CodeIcon width={18} className=' text-black dark:text-white' />}
              </div>
            </Link>
          </div>
          <p className=" hidden md:flex p-2 text-color-font-secundaria">|</p>
          <a href='https://github.com/Joao4ugusto' className=" cursor-pointer hidden sy:flex sy:p-3  ">
            <div className="transform-gpu">
              <GitHubLogoIcon width={18} className=' text-black dark:text-white' />
            </div>
          </a>
          <a href='https://twitter.com/Joao4ugusto' className=" cursor-pointer hidden sy:flex sy:p-3 ">
            <div className="transform-gpu">
              <TwitterLogoIcon width={18} className=' text-black dark:text-white' />
            </div>
          </a>
          <p className=" hidden md:flex p-2 text-color-font-secundaria">|</p>

          <div className=" hidden sy:flex dark:sy:bg-white/5 sy:bg-black/5 rounded">
            <button onClick={on1} className={`sy:flex sy:p-3 ${tema ? 'bg-black/10 rounded ' : ' bg-none'} `}>
              <SunIcon width={18} className=' text-black dark:text-white' />
            </button>
            <button onClick={on2} className={`sy:flex sy:p-3 ${tema2 ? ' bg-white/10 rounded ' : ' bg-none'} `}>
              <MoonIcon name='MoonIcon' width={18} className=' text-black dark:text-white' />
            </button>
          </div>

        </div>
        <div className=" cursor-pointer sy:flex sy:p-3 ">
          <div onClick={openSidebarClick} className="transform-gpu focus:outline-none ">
            <TextAlignRightIcon width={18} height={18} className=' flex focus:outline-none text-black dark:text-white ' />
          </div>
        </div>
      </div>
    </header>
  )
}
