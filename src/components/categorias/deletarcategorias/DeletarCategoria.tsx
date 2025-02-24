import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Categorias from "../../../models/Categoria"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarCategoria() {

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categorias>({} as Categorias)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    


    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {

            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
              
            }
        }
    }



    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`, {
        
            })

            ToastAlerta("Categoria apagada com sucesso", "sucesso")

        } catch (error: any) {
            if (error.toString().includes('403')) {
               
            }else {
                ToastAlerta("Erro ao deletar o categoria.", "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }



    function retornar() {
        navigate("/categorias")
    }
    
    return (
        <div className='container w-1/3 mx-auto py-4 '>
            <h1 className='text-4xl text-center text-white my-4'>Deletar Categoria</h1>
            <p className='text-center font-grotesk text-rosa-neon text-xl mb-4'>
                Você tem certeza de que deseja apagar a Categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-gradient-to-r  from-cyan-800 via-cyan-600 to-cyan-200 text-white text-2xl border'>
                    Categoria
                </header>
                <p className='p-8 text-2xl text-cyan-800 bg-white h-full'>{categoria.nome}</p>
                <p className='p-8 text-2xl text-cyan-800 bg-white h-full'>{categoria.descricao}</p>
                <div className="flex">
                    
                    <button 
                        className='text-slate-100 bg-slate-400 hover:bg-slate-950 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    
                    <button 
                        className='w-full text-slate-100 bg-sky-300 hover:bg-cyan-800 flex items-center justify-center'
                                   onClick={deletarCategoria}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                    
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria