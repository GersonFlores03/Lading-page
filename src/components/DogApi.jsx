//import axios from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import pharseDato from "../phrase.json"
import DogePerro from "../images/doge.png"
import Baco from "../images/Baco.jpg"
import Estrella from "../images/Estrella.jpg"
import Perritos from "../images/perrito.jpg"
import perrito2 from "../images/perro.jpg"
import perrito3 from "../images/perrito3.jpg"

const DogApi = ({ dog, FethDog }) => {
  const RamdonTwo = Math.floor(Math.random() * pharseDato.length)
  const [pharse, setPhrase] = useState(RamdonTwo)


  useEffect(() => {
    getRender
    FethDog()
  }, [])

  const getRender = () => {
    const ramdon = Math.floor(Math.random() * pharseDato.length)
    setPhrase(ramdon)
  }


   
  return (
    <body className='Body_Container'>
      <header className='Cabecera'>

        <div className=' xl:hidden sm:flex sm:flex-col sm:items-center sm:gap-4 sm:content-center sm:p-4 md:flex-row md:items-center md:justify-around lg:flex-row
        lg:items-center lg:justify-around '>
          <img className='sm:w-28' src={DogePerro} alt="Doge" />
          <strong className=' NavTwo sm:flex sm:items-center sm:content-center sm:gap-4 md:flex md:items-center md:justify-center md:gap-6 lg:flex lg:items-center lg:justify-center lg:gap-6'>
            <a href="#Home">Home</a>
            <a href="#Picture">Picture</a>
            <a href="#Phrase">Phrase</a>
            <a href="#Sing-up">Sing-up</a>
            <a href="#Contacto">Contacto</a>
          </strong>
        </div>
        <div className=' 
          xl:flex 
          sm:flex 
          sm:justify-center
          sm:items-center
          sm:gap-5 
          items-center 
          xl:justify-around
           '>
          <nav className='
              NavOne 
              xl:text-lg
              sm:text-sm
              sm:p-3
              '>
            <ul className='sm:hidden xl:block'>
              <li>
                <a href=""> <img className='xl:w-28' src={DogePerro} alt="" /> </a>
              </li>
            </ul>
          </nav>
          <ul className='
            NavTwo
            xl:items-center 
            xl:justify-center 
            gap-9
            xl:text-lg 
            sm:text-sm
            sm:hidden
            xl:flex
            '>
            <li>
               <a href="#Home">Home</a>
            </li>
            <li >
            <a href="#Picture">Picture</a>
            </li>
            <li>
            <a href="#Phrase">Phrase</a>
            </li>
            <li>
            <a href="#Sing-up">Sing-up</a>
            </li>
            <li>
            <a href="#Contacto">Contacto</a>
            </li>
          </ul>


        </div>

        <div className='
          sm:flex
          sm:items-center
          sm:justify-center
          sm:flex-col
          md:flex-row
          md:items-center
          md:justify-center
          lg:flex-row
          lg:items-center
          lg:justify-around
          xl:flex-row
          xl:items-center
          xl:content-center
          xl:justify-evenly

          ' id="#Home">
          <section className='sm:my-3 sm:p-3  md:w-96 lg:my-16 '>
            <h1 className='Title sm:text-5xl sm:mb-2' >This website is awesome</h1>
            <p className=' Parrafo sm:text-lg sm:mb-2' >
            This website has many cute puppies where you can appreciate each one of them, enjoy and have fun with their wonderful experiences.
            </p>
            <button onClick={FethDog} className='BotonMod sm:text-white'>Sing-up</button>
          </section>
          <aside className='sm:w-72 sm:h-72 sm:overflow-hidden lg:my-16' >
            <img className='sm:h-auto sm:max-w-full' src={dog.message} alt="" />
          </aside>
        </div>
      </header>

      <main className='Container_Principal'>
        <strong className='sm:text-lg sm:flex sm:items-center sm:justify-center sm:p-5     lg:mb-10 xl:text-2xl ' > Dogs and their occurrences </strong>
        <div className='Container_Img sm:grid sm:place-items-center md:grid md:place-items-center md:grid-cols-2 lg:grid lg:place-items-center lg:grid-cols-4 lg:my-16' id='Picture'>
          <aside>
            <div className='Cuadrado sm:my-2.5 sm:w-40 sm:h-40 xl:w-60 xl:h-60'>
              <img src={Baco} alt="" />
            </div>
            <p className='sm:w-40 sm:my-2.5'>He is a very playful and eater dog, he likes to go out to the park</p>
          </aside>

          <aside>
            <div className='Cuadrado sm:w-40 sm:h-40 xl:w-60 xl:h-60'>
              <img className='ImgDog' src={perrito2} alt="" />
            </div>
            <p className='sm:w-40 sm:my-2.5'>He is a very playful and eater dog, he likes to go out to the park</p>
          </aside>

          <aside>
            <div className='Cuadrado  sm:w-40 sm:h-40 xl:w-60 xl:h-60'>
              <img src={Estrella} alt="" />
            </div>
            <p className='sm:w-40 sm:my-2.5'>He is a very playful and eater dog, he likes to go out to the park</p>
          </aside>

          <aside>
            <div className='Cuadrado sm:w-40 sm:h-40 xl:w-60 xl:h-60'>
              <img className='ImgDog' src={perrito3} alt="" />
            </div>
            <p className='sm:w-40 sm:my-2.5'>He is a very playful and eater dog, he likes to go out to the park</p>
          </aside>
        </div>
        <div className='
        Container_Phrase
        sm:my-2
        sm:h-64
        sm:flex
        sm:items-center
        sm:content-center
        sm:justify-center
        sm:flex-col
        md:mb-8      
        '
          id='Phrase'>
          <p className='
          sm:w-80 
          sm:h-60
          sm:flex
          sm:items-center
          sm:justify-center
          md:text-lg
          md:w-4/5     
          '>
            {pharseDato[pharse].quote}
          </p>

          <strong className='sm:my-1.5 md:ml-96 '>
            {pharseDato[pharse].author}
          </strong>
          <button className='ButonPhrase md:ml-96 sm:my-1.5' onClick={getRender}> <i class='bx bx-right-arrow-alt bx-md'></i> </button>


        </div>
        <div className='
        SingupContainer
        sm:w-80
        sm:h-40
        sm:block
        sm:m-auto
        sm:my-2
        md:mb-8  
        md:w-4/5
        ' id='Sing-up'>
          <div className='sm:flex sm:flex-col sm:items-end sm:p-3 lg:flex-row lg:flex lg:items-center lg:justify-around lg:content-center lg:p-6 xl:flex-row xl:flex xl:items-center xl:content-center xl:justify-evenly  '>
            <section className='sm:my-2 lg:w-80 xl:w-4/5 xl:p-5 xl:text-lg'>
              <strong className='Sing-Up' > Mis perros han sido la razón por la que he despertado </strong> todos los días de mi vida con una sonrisa en mi cara.
            </section>

            <button className='BotonModTwo'> <strong className='Sing-Up'> Sing-up </strong> </button>
          </div>

        </div>
      </main>

      <footer className='FooterEnd
       sm:h-28
       sm:flex
       sm:justify-center
       sm:items-center
       '
        id='Contacto'>
        <h2 className='TextFinal'> Copyright © Gerson Flores Narciso 2023</h2>
      </footer>


    </body>
  );
};

export default DogApi;