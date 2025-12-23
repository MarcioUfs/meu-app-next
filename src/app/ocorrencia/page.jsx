"use Client";
import Link from "next/link";
import Navbar from "../../components/(navBar)/Navbar";

export default function Ocorrencia() {
  return (
    <div>
      <Navbar />
      {/* <div className="justify-center items-baseline-last flex flex-row">
        <Link href="/login">
          <button className="bg-orange-500 text-white p-2 rounded mt-4 mr-3 w-24 hover:bg-orange-700 hover:cursor-pointer">
            Voltar
          </button>
        </Link>
        <Link href="/">
          <button className="bg-orange-500 text-white p-2 rounded mt-4 mr-3 w-24 hover:bg-orange-700 hover:cursor-pointer">
            Sair
          </button>
        </Link>
      </div> */}
      <div className="justify-center items-center flex flex-col min-h-screen">
        <h1 className="text-2xl m-2">Faça aqui sua contribuição!</h1>
        <Link href="/cadastroOcorrencia">
          <button className="bg-blue-500 text-white p-2 rounded mt-4 w-64 hover:bg-blue-600 hover:cursor-pointer">
            Buracos
          </button>
        </Link>
        <Link href="/cadastroOcorrencia">
          <button className="bg-blue-500 text-white p-2 rounded mt-4 w-64 hover:bg-blue-600 hover:cursor-pointer">
            Energia
          </button>
        </Link>
        <Link href="/cadastroOcorrencia">
          <button className="bg-blue-500 text-white p-2 rounded mt-4 w-64 hover:bg-blue-600 hover:cursor-pointer">
            Esgoto
          </button>
        </Link>
        <Link href="/cadastroOcorrencia">
          <button className="bg-blue-500 text-white p-2 rounded mt-4 w-64 hover:bg-blue-600 hover:cursor-pointer">
            Iluminação
          </button>
        </Link>
        <Link href="/cadastroOcorrencia">
          <button className="bg-blue-500 text-white p-2 rounded mt-4 w-64 hover:bg-blue-600 hover:cursor-pointer">
            Animais
          </button>
        </Link>
        <Link href="/cadastroOcorrencia">
          <button className="bg-blue-500 text-white p-2 rounded mt-4 w-64 hover:bg-blue-600 hover:cursor-pointer">
            Poda de Árvores
          </button>
        </Link>
        <Link href="/cadastroOcorrencia">
          <button className="bg-blue-500 text-white p-2 rounded mt-4 w-64 hover:bg-blue-600 hover:cursor-pointer">
            Placas de Trânsito
          </button>
        </Link>
        <Link href="/cadastroOcorrencia">
          <button className="bg-blue-500 text-white p-2 rounded mt-4 w-64 hover:bg-blue-600 hover:cursor-pointer">
            Elogio
          </button>
        </Link>
      </div>
    </div>
  );
}
