"use client"
import './globals.css'
import { useState, useEffect } from 'react';
import { Space_Grotesk } from 'next/font/google' 
import Sidebar from '../app/components/Sidebar'
import HeaderMenu from './components/HeaderMenu';
const space = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  const [tema, setTema] = useState(true);
  const [tema2, setTema2] = useState(false);
  const on1 = () => {
    setTema(!tema);
    setTema2(!tema2);
  };
  const on2 = () => {
    setTema2(!tema2);
    setTema(!tema)
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.body;
      if (tema) {
        body.classList.add('light');
        body.classList.remove('dark');
      } else {
        body.classList.add('dark');
        body.classList.remove('light');
      }
    }
  }, [tema]);
  

  
const [sidebarOpened, setSidebarOpened] = useState(false);

const openSidebar = () => setSidebarOpened(true);
const closeSidebar = () => setSidebarOpened(false);

 
  return (
    <html lang="" className={space.className}>
      <body
        className={` ${tema? "bg-white bg-[url('../../public/fundo3.svg')]": "bg-color-black bg-[url('../../public/fundo.svg')]"} `}
      >
        <HeaderMenu  openSidebarClick={openSidebar} tema={tema}
        tema2={tema2}
        on1={on1}
        on2={on2} />
        {children}
        <div className="z-50">
          <Sidebar open={sidebarOpened} onClose={closeSidebar} />
        </div>
      </body>
    </html>
  )
}
