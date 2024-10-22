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
        <div className="flex gap-2 md:gap-4">
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

      <main className="flex flex-grow flex-col items-center justify-center w-full px-4 md:px-16 pt-20 bg-gray-900">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <p className="text-lg md:text-2xl font-bold text-white">
              Olá! Sou José Francisco, tenho 17 anos e sou apaixonado por
              tecnologia e programação. Estou sempre em busca de aprender novas
              tecnologias e desenvolver minhas habilidades para se tornar um
              profissional. Sou apaixonado por desenvolver soluções inovadoras e
              explorando ferramentas como JavaScript. Além de programar, gosto
              de praticar musculação para manter um equilíbrio entre corpo e
              mente. Sou fã de animes, que me inspiram com suas histórias de
              superação. Neste portfólio, você encontrará meus projetos e
              desafios no mundo da tecnologia. Fique à vontade para explorar!
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={profileImage}
              alt="profile"
              width={250} // Defina um valor menor para a largura
              height={250} // Mantenha a altura para um aspecto mais quadrado
              className="rounded-xl"
            />
          </div>
        </div>
      </main>

      <footer className="bg-gray-700 text-center p-4 w-full fixed bottom-0 z-10">
        <div>Github: @josepogers Linkedin: José Francisco Araújo</div>
      </footer>
    </div>
  );
}
