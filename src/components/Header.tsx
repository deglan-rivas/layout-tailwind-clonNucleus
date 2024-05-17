export default function Header() {
  return (
    <header className="bg-[url(/header_bg.svg)] bg-no-repeat bg-right-top bg-[length:100px] md:bg-[length:600px] lg:bg-[length:750px] xl:bg-[length:1100px]">
      <div className="max-w-screen-xl mx-auto px-10 py-10">
        <div className="flex flex-col justify-between items-center gap-4 md:flex-row">
          <div className="w-40">
            <img src="/logo.svg" alt="logo Nucleus" />
          </div>
          <nav className="text-center flex flex-col gap-2 justify-between items-center text-purple-700 md:flex-row md:text-white">
            <a href="#" className="text-purple-700 text-xl px-2 py-1 rounded-md hover:bg-purple-500 hover:text-white md:text-white">¿Qué es?</a>
            <a href="#" className="text-purple-700 text-xl px-2 py-1 rounded-md hover:bg-purple-500 hover:text-white md:text-white">¿Cómo funciona?</a>
            <a href="#" className="text-purple-700 text-xl px-2 py-1 rounded-md hover:bg-purple-500 hover:text-white md:text-white">Precios</a>
            <a href="#" className="text-purple-700 text-xl px-2 py-1 rounded-md hover:bg-purple-500 hover:text-white md:text-white">Contratar</a>
          </nav>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-10 px-10 py-10 flex flex-col justify-center items-start col-span-2 md:col-span-1">
            <p className="text-3xl font-bold text-center md:text-left md:text-5xl">
              Recibe y realiza pagos en tu celular con nucleus
            </p>
            <button className="rounded-md bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 text-center w-full md:w-auto md:text-xl">
              Obtener Cuenta
            </button>
          </div>

          <div className="col-span-2 md:col-span-1 flex justify-center items-center">
            <img src="/app_1.svg" alt="app 1" className="w-full md:w-80" />
          </div>
        </div>
      </div>
    </header>
  )
}