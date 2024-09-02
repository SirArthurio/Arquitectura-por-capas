import React from "react";
import { motion } from "framer-motion";
import {ModalMensaje} from "../Componets/Modal";

export default function Conclusion() {
  return (
    <div>
       <div className="text-justify bg-[#252525] text-white min-h-screen p-2">
      <motion.h1
        className="text-2xl font-bold mb-6 border-b border-black text-center p-4"
        initial={{ scale: 1.0, opacity: 0.5, y: -50 }}
        transition={{ duration: 0.8 }}
        animate={{ scale: 1.0, opacity: 1.0, y: 0 }}
      >
        Espero esta información te haya resultado de ayuda!
      </motion.h1>
      <motion.section
        className="bg-[#1a1a1a] text-white shadow-2 p-4 rounded-lg"
        initial={{ scale: 1.2, opacity: 0.5, z: +30 }}
        transition={{ duration: 0.8 }}
        animate={{ scale: 1.0, opacity: 1.0, z: 0 }}
      >
        <p>Como hemos podido observar, el estilo arquitectónico es:</p>
        <ul class="list-disc p-4">
          <li>fácil de implementar</li>
          <li>versátil</li>
          <li>Ampliamente utilizados</li>
        </ul>
        <p className="m-2">
          Si eres un arquitecto novato y quieres comenzar a diseñar
          arquitecturas de software, esta puede ser un buen inicio, pues es muy
          clara, fácil de diseñar y explicar en un comité de arquitectura
        </p>
      </motion.section>
      <div className="flex justify-center p-2">
        <img className="rounded-lg" src="https://i.pinimg.com/originals/88/79/77/8879776de235a904b87b6714d8672430.gif" alt="2b running" />
      </div>
      
    </div>
    </div>
   
  );
}
