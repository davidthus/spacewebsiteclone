import Image from 'next/image';
import background from "/public/home/background-home-desktop.jpg";
import styles from '../styles/Home.module.css';
import { useRef } from "react";
import Link from "next/link";

export default function Home() {
  const expandingDiv = useRef(null);
  function handleHover() {
    // expandingDiv.current.style = {transform: scale(1.15)};

  }

  return (
    <>
    <div className="fullviewport -z-10">
      <Image src={background} alt="background image" layout="fill" objectFit="cover" />
    </div>
    <section className='flex h-[83vh] justify-between items-center px-[13em]'>
      <article className="w-[25vw]"> 
        <h3 className="heading5">SO, YOU WANT TO TRAVEL TO</h3>
        <h1 className="heading1">SPACE</h1>
        <p className="text-[18px] text-accent font-barlow">Want to visit a poorly built website? I got your back, in fact you are already victim to my beautiful craftsmanship. You have no choice but to check out the rest of this website. Now.</p>
      </article>
        <div className=''>
          {/* <div className='bg-light/50 h-[285px] w-[285px] z-10 rounded-full' ref={expandingDiv}></div> */}
          <Link href="/destination" className="flex items-center justify-center">
            <a className="rounded-full bg-light font-bellefair text-[2.5em] py-[3.5em] h-[285px] w-[285px] px-[2em] z-40 before:block before:absolute before:border-[100px] before:scale-90 before:duration-1000 before:transition before:hover:scale-150 before:rounded-full before:bottom-60 before:top-50 before:right-60 before:border-light/50 before:z-50" onMouseOver={handleHover}>EXPLORE</a>
          </Link>
        </div>
    </section>
    </>
  )
}
