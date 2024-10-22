"use client";
import Image from "next/image";
import profileImage from "../../public/foto de rg.jpg"; // Atualizado
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gray-900 justify-center items-center">
      <header className="flex fixed top-0 items-center justify-between w-full bg-white gap-4 h-16 px-4 md:gap-16">
        <div>
          <Link href="/" className="font-bold text-black">
            José Francisco
          </Link>
        </div>
        <div className="Links gap-2 md:gap-4 flex">
          <Link href="/" className="font-bold text-black">
            Sobre mim
          </Link>
          <Link href="/" className="font-bold text-black">
            Contatos
          </Link>
          <Link href="/" className="font-bold text-black">
            Projetos
          </Link>
        </div>
      </header>
      <main className="flex flex-grow w-full items-center justify-center bg-grey-500 px-4 md:px-16 gap-4 md:gap-96">
        <div className="h-32">
          <p className="text-lg md:text-2xl font-bold text-white text-center">
            Olá! Me chamo José, tenho 17 anos e sou um apaixonado por
            programação e tecnologia...
          </p>
        </div>
        <div>
          <Image
            src={profileImage}
            alt="profile"
            width={2500}
            height={200}
            className="rounded-xl"
          />
        </div>
      </main>
      <footer className="bg-gray-700 text-center p-4 w-full fixed bottom-0">
        <p>footer</p>
      </footer>
    </div>
  );
}
