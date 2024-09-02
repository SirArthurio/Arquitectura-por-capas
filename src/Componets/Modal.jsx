import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export function ModalMensaje() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const lugar=["center"];

  return (
    
    <>
      <Button className ="p-2 m-2 hover:bg-[#252525] hover:text-white transition-all	"onPress={onOpen}>
        Hecho Por :D
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        class="z-90"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20 ",
        }}
        placement={lugar}
      >
        <ModalContent className="!w-50 !max-h-80 !max-w-80 z-90">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 max-w-50 p-2 m-4">
                <h2>Que vaina bacana </h2>
              </ModalHeader>
              <ModalBody>
                <p>Este trabajo fue hecho por: Luis Ramos Alfaro :D</p>
              </ModalBody>
              <ModalFooter>
                <Button className ="p-2 m-2 hover:bg-[#252525] hover:text-white transition-all	" onPress={onClose}>
                  Aceptar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}