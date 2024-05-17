interface Testimonial {
  id: number,
  content: string,
  author: string
}

const testimonial: Testimonial[] = [
  {
    id: 1,
    content: "Excelente app, muy sencillo de manejar y enviar dinero",
    author: "Deglan Rivas"
  },
  {
    id: 2,
    content: "Fantástica app, fácil de usar y transferir fondos",
    author: "Deglan Romero"
  },
  {
    id: 3,
    content: "Muy práctica y rápida para enviar dinero",
    author: "Jesus Rivas"
  },
  {
    id: 4,
    content: "Gran app, perfecta para manejar finanzas",
    author: "Jesus Romero"
  },
  {
    id: 5,
    content: "Muy intuitiva y confiable para transacciones",
    author: "Deglan Jesus"
  },
  {
    id: 6,
    content: "Excelente herramienta, envío de dinero instantáneo",
    author: "Rivas Romero"
  }
]

function TestimonialItem({ item }: { item: Testimonial }) {
  return (
    <div className="bg-white px-5 py-10 space-y-4 text-lg rounded-md basis-full hover:bg-gray-200 md:basis-[calc(50%-20px)]">
      <p className="flex justify-start items-center gap-4 text-left">
        <div className="w-8">
          <img src="/comilla.png" alt="comillas testimonial" className="w-full" />
        </div>
        {item.content}
      </p>

      <p className="text-purple-700 font-bold text-right">
        - {item.author}
      </p>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-purple-700">
      <div className="max-w-screen-xl mx-auto py-10 px-10 space-y-12">
        <h2 className="text-5xl text-white font-bold text-center md:text-6xl">
          Testimoniales
        </h2>

        <div className="flex flex-wrap justify-between gap-10">
          {
            testimonial.map(item => <TestimonialItem key={item.id} item={item} />)
          }

        </div>
      </div>
    </section>
  )
}