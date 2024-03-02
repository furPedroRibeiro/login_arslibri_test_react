import { FormEvent, useState } from 'react'
import imgLogo  from './assets/logo-ars-libri.png'
import { toast } from 'sonner'
import { Eye, EyeOff } from 'lucide-react'

export function App() {

  function sendForm(event: FormEvent){
    event.preventDefault()

    toast.success("Login efetuado com sucesso!!(isso é apenas uma página front-end)")
  }

  const [viewPassword, setViewPassword] = useState(false)

  const [viewTextPassword, setviewTextPassword] = useState('password')

  function handleViewPassword(event: FormEvent){
    event.preventDefault()

    if(viewPassword == false){
      setViewPassword(true)
      setviewTextPassword('text')
    } else{
      setViewPassword(false)
      setviewTextPassword('password')
    }
  }

  return (
    <main className="flex items-center justify-center w-screen min-h-screen">
         <div className="flex flex-col items-center  justify-center w-4/5 bg-[#302f2f] py-8 px-4 gap-4 rounded-lg md:w-auto md:px-12 md:pt-12">
          <img src={imgLogo} alt="" className='w-[150px]' />
          <h1 className='font-main text-[1.7rem] font-bold text-golden-arslibri drop-shadow-lg'>Login</h1>
          
          <form action="" className="bg-transparent flex flex-col items-center gap-3 w-full">
            <label className="font-main text-default-arslibri font-regular text-[1.2rem]" htmlFor="">Email</label>
            <input className="bg-input-arslibri rounded-sm outline-none h-10 w-4/5 px-3 text-default-arslibri text-xl text-center leading-6 md:w-64 focus:border-b-2 focus:bg-transparent focus:border-golden-arslibri focus:text-default-arslibri transition-all duration-500 break-after-column" type="email" autoFocus/>
            <label className="font-main text-default-arslibri font-regular text-[1.2rem]" htmlFor="">Senha:</label>
            <div className='flex items-center bg-input-arslibri rounded-sm outline-none h-10 w-4/5 md:w-64 focus:border-b-2 focus:bg-transparent focus:border-golden-arslibri transition-all duration-500'>
              <input className="text-default-arslibri text-xl text-center leading-6  focus:text-default-arslibri outline-none w-full h-full bg-transparent px-3" id='password' type={viewTextPassword} />
              <button onClick={handleViewPassword} className='pr-2 transition-all duration-700'>
                {viewPassword ? (
                  <EyeOff 
                    color='#DBC96C'
                  />
                ) : (
                  <Eye 
                    color='#DBC96C'
                  />
                )}
              </button>
            </div>
            <button className='bg-golden-arslibri text-black font-main font-bold text-lg py-3 w-4/5 rounded-lg mt-4 transition-colors duration-400 focus:ring-4 focus:ring-[#ffffffdf] md:focus:ring-0 md:hover:bg-[#ffeb89] md:w-64' type='reset'>Limpar</button>
            <button onClick={sendForm} className='bg-golden-arslibri text-black font-main font-bold text-lg py-3 w-4/5 rounded-lg mt-2 transition-colors duration-400 focus:ring-4 focus:ring-[#ffffffdf] md:focus:ring-0 md:hover:bg-[#ffeb89] md:w-64' type='submit'>Enviar</button>
          </form>
          <p className='text-black bg-default-arslibri py-1 px-3 rounded-lg font-bold text-lg my-6'>Beta</p>
         </div>
    </main>
  )
}
