import Image from 'next/image'
import imageContenu from '../../../public/image/photoAcceuil.png'

const Contenu2 = () => {
  return (
    <section className='hero'>
      <div className='hero-content flex-col md:flex-row'>
        <Image
          src={imageContenu}
          alt="Description de l'image"
          className='w-full md:w-1/2 rounded'
        />
        <div className='w-full md:w-1/2'>
          <h1 className='text-5xl font-bold text-orange-600'>
            Nos entrainements
          </h1>
          <p className='py-6 text-black'>Venez découvrir nos entrainements</p>
          <a
            href='/Entrainements'
            className='inline-block text-sm px-4 py-2 leading-none border rounded text-orange-600 border-orange-600 hover:border-transparent hover:text-white hover:bg-orange-600 mt-4 lg:mt-0'
          >
            Plus d'informations
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contenu2
