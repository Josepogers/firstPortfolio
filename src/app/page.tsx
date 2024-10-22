"use client";
import Image from "next/image";
import profileImage from "../../public/foto de rg.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <header className="flex fixed top-0 items-center justify-between w-full bg-white h-16 px-4 z-10">
        <div>
          <Link href="/" className="font-bold text-black">
            José Francisco
          </Link>
        </div>
        <div className="flex gap-4">
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

      <main className="flex flex-grow flex-col items-center justify-center w-full px-16 pt-20 bg-gray-900">
        <div className="flex items-center justify-between w-full gap-16">
          <div className="w-1/2">
            <p className="text-2xl font-bold text-white">
              Olá! Sou José Francisco, tenho 17 anos e sou apaixonado por
              tecnologia e programação. Estou sempre em busca de aprender novas
              linguagens, tanto no front-end ou no back-end quanto no mobile,
              explorando ferramentas como JavaScript e Java. Além de programar,
              gosto de praticar musculação para manter um equilíbrio entre corpo
              e mente. Sou fã de animes, que me inspiram com suas histórias de
              superação. Neste portfólio, você encontrará meus projetos e
              desafios no mundo da tecnologia. Fique à vontade para explorar!
            </p>
          </div>
          <div className="p-8">
            <Image
              src={profileImage}
              alt="profile"
              width={350}
              height={300}
              className="rounded-xl"
            />
          </div>
        </div>
      </main>

      <footer className="flex bg-gray-700 text-center p-4 w-full styked-fixed bottom-0 z-10">
        <div>github: @josefrancisco</div>
      </footer>
    </div>
  );
}
