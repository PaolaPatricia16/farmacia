import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categorias from "../../../models/Categoria";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categorias>({} as Categorias)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();


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

    
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/categorias")
    }


    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {

        e.preventDefault()

        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                   
                })
                ToastAlerta("A categoria foi atualizado com sucesso!","sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                 
                } else {
                    ToastAlerta("Erro ao atualizar a categoria.", "erro")
                }

            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                   
                })
                ToastAlerta("A categoria foi cadastrado com sucesso!","sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                   
                } else {
                    ToastAlerta("Erro ao cadastrar a categoria.", "erro")
                }

            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-white text-4xl text-center my-8">

                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria} >

                <div className="flex flex-col gap-2 text-white text-xl">
                    <label htmlFor="nome">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Escreva o nome da Categoria"
                        name='nome'
                        className="border-2 rounded text-indigo-950 p-2"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2 text-white text-xl">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name='descricao'
                        className="border-2  rounded text-indigo-950 p-2"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                
                <button
                    className="rounded text-slate-100  bg-sky-300 hover:bg-cyan-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">

                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :

                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;

