function Home() {
    return (
        <>
            <div className="bg-cyan-600 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl '>
                            Seja Bem Vindo!
                        </h2>
                      
                        {/* gap = define o espeçamento entre linhas e colunas  */}
                        <div className="flex justify-around gap-4 ">
                            {/* rounded = define que o elemento irá ter bordas arredondadas em 0.25rem */}
                            <div className='flex justify-around gap-4 '>
                             
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/pphc/freepik__background__37653.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
          
        </>
    )
}

export default Home