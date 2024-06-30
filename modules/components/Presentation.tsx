import { useMediaQuery } from "@react-hook/media-query";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CountdownTimer = dynamic(
  () => import("@/modules/components/CountdownTimer"),
  { ssr: false }
);

export const Presentation = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);
  const hasArrivedToMaxWith = useMediaQuery("(max-width: 1023px)");

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    setIsMobile(hasArrivedToMaxWith);
  }, [hasArrivedToMaxWith]);

  return (
    <section className="flex flex-col lg:items-center lg:flex-row w-full">
      <div className="relative w-full pb-[100%] mt-6 lg:flex-col lg:mt-[-6px] lg:pb-[95%]">
        {isMobile ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/couple-image.jpg`}
            alt={"Imagen de Jessi y Levi posando to rexulones"}
            style={{ objectFit: "cover" }}
            fill
          />
        ) : (
          <>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/couple-image.jpg`}
              alt={"Imagen de Jessi y Levi posando to rexulones"}
              style={{ objectFit: "cover" }}
              fill
            />
          </>
        )}
      </div>
      <div className="w-full lg:py-[219px] bg-grey-bg">
        <div className="relative lg:static lg:flex-col ">
          <h1 className="flex flex-col items-center text-5xl font-fantasy pt-8 z-10 lg:pt-16 lg:text-6xl">
            Levi y Jessica
          </h1>
          <p className="flex flex-col font-bold items-center tracking-widest  leading-6 pt-4 lg:pt-24 lg:text-xl">
            28 / 09 / 24
          </p>
          <p className="flex flex-col items-center tracking-widest  leading-6 pt-4 lg:pt-24 lg:text-xl">
            Nos casamos en...
          </p>
          <div className="mt-6 py-8 lg:mt-6 lg:mx-16 relative">
            <Image
              className="absolute rotate-90 top-[-74px] left-0 right-0 m-auto"
              src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/filmstrip.png`}
              alt="Flores de colores"
              width={150}
              height={220}
            />
            <CountdownTimer date={new Date("2024-09-28T12:30:00")} />
          </div>
          <div className="flex flex-col items-center p-10 relative lg:pt-12">
            <Link
              href="/confirmation"
              className="flex flex-col items-center tracking-widest  text-white leading-6 p-4 bg-black z-10"
            >
              CONFIRMAR ASISTENCIA
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
