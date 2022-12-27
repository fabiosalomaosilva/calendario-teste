import { VscError } from 'react-icons/vsc';

export function Erro404(){
    return (
        <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
            <p className="text-center mb-8">
                <VscError className='w-10'/>
            </p>

            <h1 className="text-white text-2xl">404 | Página não encontrada</h1>
        </div>
    )
}