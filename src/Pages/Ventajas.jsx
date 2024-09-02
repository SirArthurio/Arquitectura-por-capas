import React from "react";
import Tabla from "../Componets/Tablita";
import { motion } from "framer-motion";

export default function Ventajas() {
  return (
    <motion.div
      className="bg-[#1a1a1a]  flex-col min-h-screen"
      initial={{ scale: 1.4, opacity: 0.5, z: -50 }}
      transition={{ duration: 0.8 }}
      animate={{ scale: 1.0, opacity: 1.0, y: 0 }}
    >
      <Tabla />
      
    </motion.div>
  );
}
