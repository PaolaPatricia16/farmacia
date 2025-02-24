import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import Categorias from "../../../models/Categoria";
import CardCateogiras from "../cardcategorias/CardCategorias";
import { buscar } from "../../../services/Service";


function ListaCategorias() {


    const [categoria, setCategoria] = useState<Categorias[]>([])

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategoria, {
              
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
              
            }
        }
    }
    
    useEffect(() => {
        buscarCategorias()    
    }, [categoria.length])
    

    return (
        <>
        
        {categoria.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"/>
        )}


            <div className="flex justify-center w-full my-0 py-7 px-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                        
                        {categoria.map((categoria) => (
                        
                            <CardCateogiras key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaCategorias;