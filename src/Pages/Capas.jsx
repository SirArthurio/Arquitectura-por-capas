import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function Capas() {
  return (
    <motion.div
      initial={{ scale: 1.2, opacity: 0.5, z: +30 }}
      transition={{ duration: 0.5 }}
      animate={{ scale: 1.0, opacity: 1.0, z: 0 }}
      className="flex flex-col  min-h-screen bg-[#252525] text-white"
    >
      <div className="flex flex-1">
        <nav className="bg-muted  max-w-40">
          <motion.img
            initial={{ scale: 1.0, opacity: 0.1, z: +10, x: -40 }}
            transition={{ duration: 0.5 }}
            animate={{ scale: 1.0, opacity: 1.0, z: 0, y: 0 }}
            className="w-full h-full"
            src="https://i.pinimg.com/736x/72/21/49/7221491fe0c5e792d396ca13eb33d24e.jpg"
            alt="imagen de lao"
          />
        </nav>
        <main className="flex-1 pl-2 pr-2 pb-2">
          <motion.h1
            className="text-2xl font-bold mb-6 border-b border-black text-center p-4"
            initial={{ scale: 1.2, opacity: 0.5, y: -30 }}
            transition={{ duration: 0.8 }}
            animate={{ scale: 1.0, opacity: 1.0, y: 0 }}
          >
            Arquitectura de capas
          </motion.h1>
          <div className="grid gap-6">
            <motion.div
              initial={{ scale: 1.0, opacity: 0.1, z: +10, y: +40 }}
              transition={{ duration: 1.0 }}
              animate={{ scale: 1.0, opacity: 1.0, z: 0, y: 0 }}
            >
              <Card className="bg-[#1a1a1a] text-white shadow-2 p-4 rounded-lg">
                <CardHeader>
                  <h2>¿Qué es la Arquitectura por capas?</h2>
                </CardHeader>
                <CardBody>
                  <p className="text-muted-foreground">
                    La arquitectura en capas es un patrón de arquitectura
                    software usada en la gran mayoría de sistemas. Se centra en
                    una distribución jerárquica de las roles y responsabilidades
                    proporcionando una separación efectiva de las preocupaciones
                    (cada cual se encarga de lo que le cooresponde). Al pensar
                    en un sistema en términos de capas, se imaginan los
                    principales subsistemas de software ubicados de la misma
                    forma que las capas de un pastel, donde cada capa descansa
                    sobre la inferior.
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              initial={{ scale: 1.0, opacity: 0.1, z: +10, y: +40 }}
              transition={{ duration: 1.0 }}
              animate={{ scale: 1.0, opacity: 1.0, z: 0, y: 0 }}
            >
              <Card className="bg-[#1a1a1a] text-white shadow-2 p-4 rounded-lg">
                <CardHeader>
                  <h2>Capa persistencia</h2>
                </CardHeader>
                <CardBody>
                  <p className="text-muted-foreground">
                    Es la capa inferior, el corazón de nuestra aplicación. Ésta
                    capa solo debe comunicarse con su capa inmediatamente
                    superior. Es en ésta, dónde se persiste la información, sea
                    en base de datos, ficheros, memoria...{" "}
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              initial={{ scale: 1.0, opacity: 0.1, z: +10, y: +40 }}
              transition={{ duration: 1.0 }}
              animate={{ scale: 1.0, opacity: 1.0, z: 0, y: 0 }}
            >
              <Card className="bg-[#1a1a1a] text-white shadow-2 p-4 rounded-lg">
                <CardHeader>
                  <h2>Capa lógica negocio </h2>
                </CardHeader>
                <CardBody>
                  <p className="text-muted-foreground">
                    En esta parte del aplicativo, tenemos toda la lógica
                    perteneciente a nuestro negocio, el mapeo con las bases de
                    datos si es el caso y los tipos de datos que existen en
                    nuestra persistencia{" "}
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              initial={{ scale: 1.0, opacity: 0.1, z: +10, y: +40 }}
              transition={{ duration: 1.0 }}
              animate={{ scale: 1.0, opacity: 1.0, z: 0, y: 0 }}
            >
              <Card className="bg-[#1a1a1a] text-white shadow-2 p-4 rounded-lg">
                <CardHeader>
                  <h2>Capa persistencia</h2>
                </CardHeader>
                <CardBody>
                  <p className="text-muted-foreground">
                    Es la capa inferior, el corazón de nuestra aplicación. Ésta
                    capa solo debe comunicarse con su capa inmediatamente
                    superior. Es en ésta, dónde se persiste la información, sea
                    en base de datos, ficheros, memoria...{" "}
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              initial={{ scale: 1.0, opacity: 0.1, z: +10, y: +40 }}
              transition={{ duration: 1.0 }}
              animate={{ scale: 1.0, opacity: 1.0, z: 0, y: 0 }}
            >
              <Card className="bg-[#1a1a1a] text-white shadow-2 p-4 rounded-lg">
                <CardHeader>
                  <h2>Capa pública </h2>
                </CardHeader>
                <CardBody>
                  <p className="text-muted-foreground">
                    Es la capa superior que se compone de código HTML, CSS3,
                    JavaScript por ejemplo, mezclado con código dinámico que nos
                    proporciona el motor de vistas si es el caso. Esta
                    arquitectura puede contener más capas, como por ejemplo una
                    capa de Service, Repository, ViewModel. Cuándo sumamos más
                    capas a nuestro aplicativo aumentamos la complejidad del
                    mismo, la curva de aprendizaje pero desacoplamos muchísimo
                    más las capas y otorgamos más independencia a cada una de
                    las fases del aplicativo.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
