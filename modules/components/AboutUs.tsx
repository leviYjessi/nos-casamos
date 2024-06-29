import HistoryLineSegment from '@/modules/components/HistoryLineSegment';
import Image from 'next/image';

const AboutUs = () => {
    return (
        <div className='w-full bg-white flex flex-col items-center pt-10'>
            <h3 id='about-us' className='tracking-widest text-xl font-bold'>¿Conoces nuestra historia?</h3>
            <div className="relative">
                <div className="flex flex-col justify-center items-center w-full bg-white pt-4">
                    <Image src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/hearth-with-leafs.svg`}
                           height={55}
                           width={190}
                           alt=""/>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-[49px]">
                    <Image src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/arrow-hearth.svg`}
                           height={26}
                           width={24}
                           alt=""/>
                </div>
            </div>
            <div className="m-auto bg-white">
                <div className="flex flex-col gap-16 w-[330px] m-auto lg:w-[400px]">
                    <HistoryLineSegment imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/meet.png`}
                                        imageAlt={'Nosotros de jovenes'}
                                        text={'NOS CONOCEMOS'}
                                        date={'JULIO 2018'}
                                        textPosition={'left'}/>
                    <HistoryLineSegment imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/dating.png`}
                                        imageAlt={'Nosotros dandonos nuestro primer beso'}
                                        text={'EMPEZAMOS A SALIR'}
                                        date={'AGOSTO 2018'}
                                        textPosition={'right'}/>
                    <HistoryLineSegment imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/living-together.png`}
                                        imageAlt={'Nosotros con Kiba'}
                                        text={'VIVIMOS JUNTOS'}
                                        date={'MAYO 2019'}
                                        textPosition={'left'}/>
                </div>
            </div>
            <p className="text-center bg-white tracking-widest px-6 py-16  max-w-5xl m-auto">¡Acompáñanos
                en el siguiente gran evento de nuestras vidas!
            </p>
        </div>
    );
};

export default AboutUs;
