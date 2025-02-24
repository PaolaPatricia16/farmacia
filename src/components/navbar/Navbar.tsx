import { Link } from "react-router-dom"


function Navbar() {

    
    return (
        <>
            <div className='w-full flex justify-center py-4
            bg-gradient-to-r from-cyan-800 via-cyan-600 to-cyan-200 text-white'>
                <div className="container flex justify-between text-lg  py-1 px-3">

                    <Link to='/home' className="text-2xl font-bold"> Sistema de Farmácia </Link>

                    <div className='flex gap-6 text-indigo-950 font-semibold text-xl'>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categorias</Link>

                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar