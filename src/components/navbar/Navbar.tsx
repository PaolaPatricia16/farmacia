import { Link } from "react-router-dom"

function Navbar() {

    
    return (
        <>
            <div className='w-full flex justify-center py-4
            bg-gradient-to-r from-cyan-800 via-cyan-600 to-cyan-200 text-white'>
                {/* justify-between = posiciona os itens na horizontal e os distribui uniformemente */}
                {/* /* text-lg = define o tamanho da fonte e da linha  */}
                <div className="container flex justify-between text-lg  py-1 px-3">

                    {/* Link = atribui a rota criada no App.tsx */}
                    <Link to='/home' className="text-2xl font-bold"> Sistema de Farmácia </Link>

                    {/* gap-4 = define o tamanho das lacunas entre os elementos */}
                    <div className='flex gap-6 text-indigo-950 font-semibold text-xl'>
                        {/* O 'Link to=' atribui a rota definida no App.tsx */}
                        Categorias
                        Cadastrar Categorias

                        
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar