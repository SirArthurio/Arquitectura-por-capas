import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function Arquitectura() {
  return (
    <motion.div
      initial={{ scale: 1.2, opacity: 0.5, z: +30 }}
      transition={{ duration: 0.5 }}
      animate={{ scale: 1.0, opacity: 1.0, z: 0 }}
      className="flex flex-col  min-h-screen bg-[#252525] text-white "
    >
      <div className="flex flex-1">
        <nav className="bg-muted  border-r max-w-40">
          <img
            className="w-full h-full"
            src="https://i.pinimg.com/736x/f5/31/22/f53122b8544616dc82f94e3691d92228.jpg"
            alt="imagen de lao"
          />
        </nav>
        <main className="flex-1 pl-2 pr-2">
          <motion.h1
            className="text-2xl font-bold mb-6 border-b border-black text-center p-4"
            initial={{ scale: 1.2, opacity: 0.5, y: -30 }}
            transition={{ duration: 0.8 }}
            animate={{ scale: 1.0, opacity: 1.0, y: 0 }}
          >
            Arquitectura de software
          </motion.h1>
          <div className="grid gap-6">
            <motion.div>
              <Card className="bg-[#1a1a1a] text-white shadow-2 p-4 rounded-lg">
                <CardHeader>
                  <h2>¿Qué es la arquitectura software?</h2>
                </CardHeader>
                <CardBody>
                  <p className="text-muted-foreground">
                    La arquitectura del software es el diseño de más alto nivel
                    de la estructura de un sistema. Consiste en un conjunto de
                    abstracciones que forman el “marco” del software. La
                    arquitectura se diseña en la fase posterior a la de
                    requisitos, la llamada fase de diseño.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
            <div className="flex justify-center text-center">
              <img
                className=""
                src="https://i.pinimg.com/originals/86/b8/72/86b872bc4dc4e2457128dd465a26ce68.gif"
                alt=""
              />
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
