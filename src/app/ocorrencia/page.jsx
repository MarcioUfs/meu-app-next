"use Client"
import Link from 'next/link'
export default function Home() {
    return (
        <div className="justify-center items-center flex flex-col min-h-screen">
            <h1>Inicial</h1>
            <p>Faça aqui sua contribuição!</p>
            <Link href='/buracos'>
                <button
                    className="bg-blue-500 text-white p-2 rounded mt-4 w-64 hover:bg-blue-600 hover:cursor-pointer"
                >

                    Buracos
                </button>
            </Link>
            <button
                 className="bg-blue-500 text-white p-2 rounded mt-4 w-64 hover:bg-blue-600 hover:cursor-pointer"
            >
                Energia
            </button>
            <button
                 className="bg-blue-500 text-white p-2 rounded mt-4 w-64 hover:bg-blue-600 hover:cursor-pointer"
            >
                Esgoto
            </button>
            <button
                 className="bg-blue-500 text-white p-2 rounded mt-4 w-64 hover:bg-blue-600 hover:cursor-pointer"
            >
                Iluminação
            </button>
        </div>
    )

}