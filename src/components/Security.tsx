import { useEffect, useState } from "react";

export default function Security() {
  const [screenSize, setScreenSize] = useState({
    // width: window.innerWidth,
    // height: window.innerHeight,
    width: 20,
    height: 20,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    // console.log(screenSize)

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="bg-purple-700 ">
      {/* <section className={`w-full border-b-[50px] border-r-[1870px] border-b-purple-700 border-r-transparent`}>
        {screenSize.width} - {screenSize.height}
      </section> */}
      <div className="max-w-screen-xl mx-auto py-10 px-10 space-y-10">
        <h3 className="text-center text-white text-5xl font-bold md:text-6xl">
          Nucleus es seguro
        </h3>

        <div className="flex flex-col justify-center items-center md:flex-row gap-8">
          <div className="space-y-10 basis-full md:basis-1/2">
            <p className="px-5 py-5 bg-white text-xl transition-transform hover:scale-105 md:text-2xl">
              Nucleus es seguro e imposible de clonar
            </p>

            <p className="px-5 py-5 bg-white text-xl transition-transform hover:scale-105 md:text-2xl">
              Utiliza tu cara o tu dedo para confirmar un deposito o registrar una cuenta
            </p>

            <p className="px-5 py-5 bg-white text-xl transition-transform hover:scale-105 md:text-2xl">
              Paga en un establecimiento con una tarjeta de crédito que se desactiva una vez que has hecho tu compra
            </p>
          </div>

          <div className="basis-full md:basis-1/2">
            <img src="/seguridad.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}