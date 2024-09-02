import React from "react";
import Capas from "./Pages/Capas";
import Inicio from "./Pages/Inicio"
import Arquitectura from "./Pages/Arquitectura"
import Ventajas from "./Pages/Ventajas";
import Ejemplos  from "./Pages/Ejemplos";
import Aprendamos from "./Pages/Aprendamos";
import Conclusion from "./Pages/Conclusion";


export const ConfiguracionRutas=[
  {
    path:'/',
    element:<Inicio/>,
  },
  {
    path:'/Capas',
    element:<Capas/>,
  },
  {
    path:'/Arquitectura',
    element:<Arquitectura/>,
  },
  {
    path:'/Ventajas',
    element:<Ventajas/>,
  },
  {
    path:'/Ejemplos',
    element:<Ejemplos/>,
  },
  {
    path:'/Aprendamos',
    element:<Aprendamos/>,
  },
  {
    path:'/Conclusion',
    element:<Conclusion/>,
  },
  
]

