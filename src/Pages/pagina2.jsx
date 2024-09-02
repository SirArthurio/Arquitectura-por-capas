import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

export default function Inicio() {
  return (
    <motion.div  animate={{ x: [null, 100, 0] }} className="flex flex-col m-4 min-h-screen bg-cyan-50	rounded-lg">
      <div className="flex flex-1">
        <nav className="bg-muted  border-r max-w-80">
        <img className="w-full h-full" src="https://i.pinimg.com/originals/c5/f6/b4/c5f6b43865b3d7bc2ed1bab52fe05213.jpg" alt="" />
        </nav>
        <main className="flex-1 p-8">
          <p className="text-2xl font-bold mb-6 border-b">Traveling condor</p>
          <div className="grid gap-6">
            <Card className="border border-black	 shadow-2 p-4 rounded-lg">
              <CardHeader>
                <p>The Quantum Enigma</p>
              </CardHeader>
              <CardBody>
                <p className="text-muted-foreground">
                  Explore the mysterious world of quantum mechanics and its implications for our understanding of
                  reality.
                </p>
              </CardBody>
            </Card>
            <Card className="border border-black	 shadow-2 p-4 rounded-lg">
              <CardHeader>
                <p>The Quantum Enigma</p>
              </CardHeader>
              <CardBody>
                <p className="text-muted-foreground">
                  Explore the mysterious world of quantum mechanics and its implications for our understanding of
                  reality.
                </p>
              </CardBody>
            </Card> <Card className="border border-black	 shadow-2 p-4 rounded-lg">
              <CardHeader>
                <p>The Quantum Enigma</p>
              </CardHeader>
              <CardBody>
                <p className="text-muted-foreground">
                  Explore the mysterious world of quantum mechanics and its implications for our understanding of
                  reality.
                </p>
              </CardBody>
            </Card>
          </div>
        </main>
      </div>
    </motion.div>
  )
}