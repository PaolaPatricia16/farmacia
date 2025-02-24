function Home() {
    return (
        <>
            <div className="bg-cyan-600 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl '>
                            Seja Bem Vindo!
                        </h2>

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