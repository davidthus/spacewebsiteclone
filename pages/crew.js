import Image from "next/image";
import background from "/public/crew/background-crew-desktop.jpg";

function crew() {
  return (
    <>
    <div className="fullviewport -z-10">
      <Image src={background} alt="background image" layout="fill" objectFit="cover" />
    </div>
    </>
  )
}

export default crew;