import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { IoLayersOutline } from "react-icons/io5";
import { ModalMensaje } from "../Componets/Modal";

const menuItems = [
  {
    titulo: "Ejemplos",
    ref: "/Ejemplos",
  },
  {
    titulo: "Aprendamos",
    ref: "/Aprendamos",
  },
  {
    titulo: "Conclusion",
    ref: "/Conclusion",
  },
];

export default function Barra() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  React.useEffect(() => {
    if (isMenuOpen) {
      const closeMenu = () => setIsMenuOpen(false);
      document.addEventListener("click", closeMenu);
      return () => document.removeEventListener("click", closeMenu);
    }
  }, [isMenuOpen]);

  const NavbarContentEnd = () => {
    return (
      <NavbarContent justify="end">
          <ModalMensaje className="z-80 !w-50 !max-h-10 !max-w-20" 
          class="z-800"/>
      </NavbarContent>
    );
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="border-b z-20"
      class="z-20"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <IoLayersOutline />

          <Link to="/Arquitectura-por-capas">
            <p className="font-bold text-inherit">ARQUITECTURA</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" to={item.ref}>
              {item.titulo}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContentEnd />

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.titulo}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full "
              to={item.ref}
              size="lg"
              onClick={handleMenuItemClick}
            >
              {item.titulo}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
