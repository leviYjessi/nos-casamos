import Image from "next/image";

const Gift = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center px-4 pt-10 text-center bg-white w-full">
      <h3 className="tracking-widest leading-6 text-xl font-bold">
        Lo más importante para nosotros es que estés presente en nuestro gran
        día.
      </h3>
      <p className="tracking-widest leading-6 pt-4 lg:pt-8">
        Si además deseas contribuir a nuestra luna de miel, te estaremos
        eternamente agradecidos. ¡Gracias por ser parte de nuestra historia!
      </p>
      <p className="tracking-widest  leading-6 pt-4 lg:pt-8 lg:tracking-wider">
        ES17 2100 6372 8113 0027 0095
      </p>
      <Image
        className="pt-7 pb-10"
        src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/envelope.svg`}
        height={92}
        width={76}
        alt="Anillos entrelazados"
      />
    </div>
  );
};

export default Gift;
