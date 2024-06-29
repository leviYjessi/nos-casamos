import { useMediaQuery } from "@react-hook/media-query";
import { useEffect, useState } from "react";

export const WelcomeTextCard = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);
  const hasArrivedToMaxWith = useMediaQuery("(max-width: 1023px)");

  useEffect(() => {
    setIsMobile(hasArrivedToMaxWith);
  }, [hasArrivedToMaxWith]);

  return (
    <div className="flex flex-col items-center px-4 pt-6 lg:py-12 bg-grey-bg">
      <p className="tracking-widest leading-6 lg:text-xl lg:pt-8">
        Por fin llegó el día del gran estreno...
      </p>
      {isMobile ? (
        <h3 className="tracking-widest leading-6 text-xl font-bold pt-6">
          ¡Nos casamos!
        </h3>
      ) : (
        <h3 className="tracking-widest leading-6 lg:text-2xl">¡Nos casamos!</h3>
      )}
      <p className="tracking-widest leading-6 pt-6 text-center lg:text-xl lg:pt-8 lg:tracking-wider">
        Después de un emocionante viaje juntos, ha llegado el momento de celebrar nuestro amor y compromiso.
      </p>
      <p className="tracking-widest leading-6 py-4 text-center lg:text-xl lg:px-8 lg:tracking-wider">
        Queremos que nos acompañes en este día tan especial, lleno de alegría,
        risas y mucho amor.
      </p>
    </div>
  );
};
