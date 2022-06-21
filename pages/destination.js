import Image from "next/image";
import background from "/public/destination/background-destination-desktop.jpg"

function destination() {
  return (
    <>
      <div className="fullviewport -z-10">
        <Image src={background} alt="background image" layout="fill" objectFit="cover" />
      </div>
    </>
  )
}

export default destination;