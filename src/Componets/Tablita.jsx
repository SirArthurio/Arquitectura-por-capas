import React from "react";
import DataTable, { createTheme } from "react-data-table-component";

export default function Tabla() {
    createTheme('nier', {
        text: {
          primary: '#ffffff',
          secondary: '#2aa198',
        },
        background: {
          default: '#252525',
        },
        context: {
          background: '#252525',
          text: '#FFFFFF',
        },
        divider: {
          default: '#1a1a1a',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      }, 'dark');
  const columnas = [
    {
      name: "Ventajas",
      selector: row => row.Ventajas,
    },
    {
      name: "Desventajas",
      selector: row => row.Desventajas,
    },
  ];
  const data = [
    {
      Ventajas: "Separación de responsabilidades.",
      Desventajas:"Performance.",
    },
    {
        Ventajas: "Fácil de desarrollar.",
        Desventajas:"Escalabilidad",
    },
    {
        Ventajas: "Fácil de probar.",
        Desventajas:"Complejidad de despliegue",
    },
    {
        Ventajas: "Fácil de mantener.",
        Desventajas:"Anclado a un Stack tecnológico",
    },

    {
        Ventajas:"Seguridad",
        Desventajas:"Tolerancia a los fallos.",
    },
  ];

  return (
    <div>
    <section className="border bg-[#252525] text-white text-center text-2xl p-4 h-full">
      <h2 className="p-2 m-2">Ventajas Y Desventajas</h2>
      <DataTable columns={columnas} data={data}  theme="nier"/>
    </section>
    </div>

  );
}
