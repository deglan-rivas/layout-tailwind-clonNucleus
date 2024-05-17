export default function Footer() {
  return (
    <footer className="bg-purple-900">
      <div className="px-10 py-10 max-w-screen-xl mx-auto flex flex-col justify-between items-center gap-12 md:flex-row">
        <h2 className="text-5xl text-white font-bold md:text-6xl">
          Nucleus
        </h2>

        <nav className="flex flex-col justify-between items-center gap-2 md:flex-row">
          <a href="#" className="text-white text-xl hover:bg-purple-500 px-2 py-1 rounded-md">¿Qué es?</a>
          <a href="#" className="text-white text-xl hover:bg-purple-500 px-2 py-1 rounded-md">¿Cómo funciona?</a>
          <a href="#" className="text-white text-xl hover:bg-purple-500 px-2 py-1 rounded-md">Precios</a>
          <a href="#" className="text-white text-xl hover:bg-purple-500 px-2 py-1 rounded-md">Contratar</a>
        </nav>
      </div>
    </footer>
  )
}