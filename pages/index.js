import Image from 'next/image'
import background from "/public/home/background-home-desktop.jpg";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className="fullviewport -z-10">
      <Image src={background} alt="background image" layout="fill" objectFit="cover" />
    </div>
    </>
  )
}
