import {Link} from 'react-router-dom'
import Categorias from '../../../models/Categoria'


interface CardCateogirasProps{
    categoria: Categorias
}


function CardCateogiras({ categoria }: CardCateogirasProps) {

    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-gradient-to-r  from-cyan-800 via-cyan-600 to-cyan-200 text-white  text-2xl border'>
                Categorias
            </header>

            <p className='p-8 text-2xl text-cyan-800 bg-white h-full'> {categoria.nome} </p>
            
            <p className='p-8 text-2xl text-cyan-800 bg-white h-full'> {categoria.descricao} </p>

            <div className='flex'>
            
                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full text-slate-100 bg-sky-300 hover:bg-cyan-800 flex items-center justify-center py-2'>
                    <button> Editar </button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`}  
                    className='text-slate-100 bg-slate-400 hover:bg-slate-950 w-full flex items-center justify-center'>
                    <button> Deletar </button>
                </Link>
            </div>
        </div>
    )
}

export default CardCateogiras