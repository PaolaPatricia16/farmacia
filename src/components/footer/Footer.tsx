import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'


function Footer() {

    let data = new Date().getFullYear() 

    return (
        <>
            <div className="flex justify-center bg-gradient-to-r from-cyan-800 via-cyan-600 to-cyan-200">
                <div className="container flex flex-col items-center py-2">
                    <p className='text-xl font-semibold'>
                        Sistema de Farmácia - Paola Patricia | Copyright: {data}
                    </p>
                    <p className='text-base'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2 text-white'>
                        <a 
                            href='http://www.linkedin.com/in/paola-patricia-9bba6b15a'>
                                  <LinkedinLogo size={40} weight='bold'  />
                        </a>
                        <a
                            href='https://github.com/PaolaPatricia16' >
                                  <GithubLogo size={40} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer