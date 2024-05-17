export default function Commissions() {
  return (
    <section className="max-w-screen-xl mx-auto py-10 px-10 space-y-12">
      <h2 className="text-5xl font-bold text-center md:text-6xl">
        Comisiones
      </h2>

      <div className="flex flex-col justify-between items-center gap-12 md:flex-row">
        <div className="space-y-12 basis-full md:basis-1/2">
          <p className="text-2xl font-bold text-center md:text-left md:text-3xl">
            Mientras más veces utilices nucleus, menos pagas:
          </p>

          <p className="text-black text-right text-xl flex flex-col justify-between items-center gap-4 bg-white border shadow-lg px-5 py-5 transition-transform hover:scale-105 md:flex-row">
            <span className="text-5xl font-bold text-purple-700">
              3%
            </span>
            de todas tus transacciones si tus movimientos son menores a $999 USD.
          </p>

          <p className="text-black text-right text-xl flex flex-col justify-between items-center gap-4 bg-white border shadow-lg px-5 py-5 transition-transform hover:scale-105 md:flex-row">
            <span className="text-5xl font-bold text-purple-700">
              2.5%
            </span>
            de todas tus transacciones si tus movimientos son mayores a $999 USD.
          </p>
        </div>

        <div className="basis-full md:basis-1/2">
          <img src="/app_3.svg" alt="app - comisiones" className="w-screen" />
        </div>
      </div>
    </section>
  )
}