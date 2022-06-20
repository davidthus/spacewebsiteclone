import Image from 'next/image'
import Logo from '/public/logo.svg'
import Link from 'next/link'
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <div className='flex justify-between items-center py-12'>
      <div className='ml-12'>
        <Link href="/"><a>
          <Image src={Logo} width={48} height={48} alt="logo" className="z-50" />
        </a></Link>
      </div>
      <ul className='w-[62vw] h-[10vh] flex items-center backdrop-blur-[100px] px-28 gap-4'>
        <li className={`${router.pathname == "/" ? "active navitemactive" : "naviteminactive"}`}>
          <Link href="/"><a className="navlink"><span className='font-bold mx-[7px]'>00</span>HOME</a></Link>
        </li>
        <li className={`${router.pathname == "/destination" ? "active navitemactive" : "naviteminactive"}`}>
          <Link href="/destination"><a className="navlink"><span className='font-bold mx-[7px]'>01</span>DESTINATION</a></Link>
        </li>
        <li className={`${router.pathname == "/crew" ? "active navitemactive" : "naviteminactive"}`}>
          <Link href="/crew"><a className="navlink"><span className='font-bold mx-[7px]'>02</span>CREW</a></Link>
        </li>
        <li className={`${router.pathname == "/technology" ? "active navitemactive" : "naviteminactive"}`}>
          <Link href="/technology"><a className="navlink"><span className='font-bold mx-[7px]'>03</span>TECHNOLOGY</a></Link>
        </li>
      </ul>
    </div>
  )
}

export default Header;