export default function Header() {
  return (
    <header className="mx-5 bg-[url(/header_bg.svg)] bg-no-repeat bg-right-top bg-[length:50px_50px]">
      <div className="flex flex-col justify-between items-center gap-4 md:flex-row">
        <div className="w-40">
          <img src="/logo.svg" alt="logo Nucleus" />
        </div>
        <nav className="text-center flex flex-col gap-2 justify-between items-center text-purple-700 md:flex-row md:text-white">
          <a href="#">¿Qué es?</a>
          <a href="#">¿Cómo funciona?</a>
          <a href="#">Precios</a>
          <a href="#">Contratar</a>
        </nav>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-10 px-10 py-10 flex flex-col justify-center items-start col-span-2 md:col-span-1">
          <p className="text-3xl font-bold text-center md:text-left md:text-5xl">
            Recibe y realiza pagos en tu celular con nucleus
          </p>
          <button className="bg-purple-700 text-white py-2 px-4 text-center w-full md:w-auto">
            Obtener Cuenta
          </button>
        </div>

        <div className="col-span-2 md:col-span-1">
          <img src="/app_1.svg" alt="app 1" />
        </div>
      </div>
    </header>
  )
}