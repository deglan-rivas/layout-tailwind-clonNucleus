interface WhatIsItem {
  id: number
  title: string,
  content: string
}

const whatIsItems: WhatIsItem[] = [
  {
    id: 1,
    title: "Fácil",
    content: "Crea una cuenta, envía tu documentación y comienza a utilizar nucleus en un par de horas"
  },
  {
    id: 2,
    title: "Seguro",
    content: "Por su tecnología digital nucleus es imposible de hackear o robar"
  },
  {
    id: 3,
    title: "Administrable",
    content: "Añade o transfiere fondos a tu banco, añade límites o controla tus gastos"
  }
]

function WhatIsItem({ item }: { item: WhatIsItem }) {
  return (
    <div className="px-5 py-5 space-y-2 border shadow-2xl bg-white hover:scale-105 transition-transform">
      <h3 className="text-purple-700 font-bold text-center text-3xl md:text-4xl">
        {item.title}
      </h3>
      <p className="text-left text-2xl md:text-3xl">
        {item.content}
      </p>
    </div>
  )
}

export default function WhatIs() {
  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto px-10 space-y-10 pb-10">
        <h2 className="text-5xl font-bold text-center md:text-6xl">
          ¿Qué es?
        </h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-3 row-start-2 md:col-span-1 md:row-start-1 md:flex md:items-center">
            <img src="/app_2.svg" alt="imagen de app 2" className="flex justify-center items-center" />
          </div>

          <div className="space-y-10 px-5 col-span-3 flex flex-col justify-between md:col-span-2 lg:justify-center">
            {
              whatIsItems.map(item => <WhatIsItem key={item.id} item={item} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}