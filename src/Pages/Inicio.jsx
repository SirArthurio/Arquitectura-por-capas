import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Inicio() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-white">
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]" />
        <img
          src="https://i.pinimg.com/originals/98/69/b9/9869b9fe5ad53be06b8dd74c7896d84b.jpg"
          alt="Hero"
          className="h-full w-full object-cover object-center"
          width="1600"
          height="800"
          style={{ aspectRatio: "1600/800", objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            initial={{ scale: 1.0, opacity: 0.1, y: +30 }}
            transition={{ duration: 0.5 }}
            animate={{ scale: 1.0, opacity: 1.0, y: 0 }}
          >
            Arquitectura de capas
          </motion.h1>

          <motion.p
            className="max-w-xl text-lg text-muted-foreground"
            initial={{ scale: 1.0, opacity: 0.1, y: +30 }}
            transition={{ duration: 0.5 }}
            animate={{ scale: 1.0, opacity: 1.0, y: 0 }}
          >
            Exploremos juntos este tipo de arquitectura de software.
          </motion.p>
        </div>
      </section>

      <section className="bg-[#252525] py-12 md:py-24 px-4">

        <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          <div className="group relative overflow-hidden rounded-lg bg-[#1a1a1a] transition-all duration-300 hover:bg-[#252525]">
            <Link to="/Arquitectura">
              <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a] transition-all duration-300 group-hover:from-[#252525]/80 group-hover:to-[#252525]/80" />
              <div className="relative z-10 p-6 transition-all duration-300 group-hover:p-8">
                <h3 className="text-2xl font-bold">
                  ¿Que es una Arquitectura?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Aqui descubriras el concepto clave ;D
                </p>
              </div>
            </Link>
          </div>

          <Link to="/Capas">
            <div className="group relative overflow-hidden rounded-lg bg-[#1a1a1a] transition-all duration-300 hover:bg-[#252525]">
              <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a] transition-all duration-300 group-hover:from-[#252525]/80 group-hover:to-[#252525]/80" />
              <div className="relative z-10 p-6 transition-all duration-300 group-hover:p-8">
                <h3 className="text-2xl font-bold">
                  ¿Qué es la Arquitectura por capas?
                </h3>
                <p className="mt-2 text-muted-foreground">Profundizaremos :D</p>
              </div>
            </div>
          </Link>

          <div className="group relative overflow-hidden rounded-lg bg-[#1a1a1a] transition-all duration-300 hover:bg-[#252525]">
            <Link to="/Ventajas">
              <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a] transition-all duration-300 group-hover:from-[#252525]/80 group-hover:to-[#252525]/80" />
              <div className="relative z-10 p-6 transition-all duration-300 group-hover:p-8">
                <h3 className="text-2xl font-bold">Ventajas y Desventajas</h3>
                <p className="mt-2 text-muted-foreground">
                  Aqui veremos las principales ventajas y desventajas.
                </p>
              </div>
            </Link>
          </div>

          <div className="group relative overflow-hidden rounded-lg bg-[#1a1a1a] transition-all duration-300 hover:bg-[#252525]">
            <Link to="Ejemplos">
              <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a] transition-all duration-300 group-hover:from-[#252525]/80 group-hover:to-[#252525]/80" />
              <div className="relative z-10 p-6 transition-all duration-300 group-hover:p-8">
                <h3 className="text-2xl font-bold">Ejemplos</h3>
                <p className="mt-2 text-muted-foreground">
                  Por medio de imagenes te mostraremos como se veria una
                  arquitectura de capas
                </p>
              </div>
            </Link>
          </div>

          <div className="group relative overflow-hidden rounded-lg bg-[#1a1a1a] transition-all duration-300 hover:bg-[#252525]">
            <Link to="/Aprendamos">
              <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a] transition-all duration-300 group-hover:from-[#252525]/80 group-hover:to-[#252525]/80" />
              <div className="relative z-10 p-6 transition-all duration-300 group-hover:p-8">
                <h3 className="text-2xl font-bold">Aprendamos juntos!</h3>
                <p className="mt-2 text-muted-foreground">
                  Aqui encontraras tutoriales de esta hermosa arquitectura!
                </p>
              </div>
            </Link>
          </div>

          <div className="group relative overflow-hidden rounded-lg bg-[#1a1a1a] transition-all duration-300 hover:bg-[#252525]">
            <Link to="/Conclusion">
              <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a] transition-all duration-300 group-hover:from-[#252525]/80 group-hover:to-[#252525]/80" />
              <div className="relative z-10 p-6 transition-all duration-300 group-hover:p-8">
                <h3 className="text-2xl font-bold">Conclusion</h3>
                <p className="mt-2 text-muted-foreground">
                  Espero y esta explicacion te halla ayudado!
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
