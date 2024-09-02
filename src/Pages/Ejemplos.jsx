import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

export default function Ejemplos() {
  return (
    <div className="text-center bg-[#252525] text-white min-h-screen p-2">
      <motion.h1
        className="text-2xl font-bold mb-6 border-b border-black text-center p-4"
        initial={{ scale: 1.2, opacity: 0.5, y: -30 }}
        transition={{ duration: 0.8 }}
        animate={{ scale: 1.0, opacity: 1.0, y: 0 }}
      >
        Comunicacion entre capas
      </motion.h1>
      <Card className=" bg-[#1a1a1a] text-white shadow-2 p-4 m-4 rounded-lg ">
        <CardBody>
          <motion.div
            className="  flex justify-center items-center"
            initial={{ scale: 1.2, opacity: 0.5, z: -30 }}
            transition={{ duration: 0.8 }}
            animate={{ scale: 1.0, opacity: 1.0, z: 0 }}
          >
            <img
              className=" flex h-100 w-100 text-center"
              src="https://reactiveprogramming.io/_next/image?url=%2Ffigures%2Fcapas-flow.png&w=1920&q=75" alt="si ves esto no hay internet compae"
            ></img>
          </motion.div>
        </CardBody>
      </Card>
    </div>
  );
}
