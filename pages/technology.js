import Image from "next/image";
import background from "/public/technology/background-technology-desktop.jpg"

function technology() {
  return (
    <>
      <div className="fullviewport -z-10">
        <Image src={background} alt="background image" layout="fill" objectFit="cover" />
      </div>
    </>
  )
}

export default technology;