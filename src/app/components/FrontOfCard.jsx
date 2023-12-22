import imageContenu from '../../../public/image/babyTennis.png'
import imageContenu2 from '../../../public/image/logoParatennis.png'
import Image from 'next/image'

const FrontOfCard = () => {
  return (
    <div className='absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0'>
      <Image
        src={imageContenu}
        alt="Description de l'image"
        className='w-full  rounded order-2'
      />
    </div>
  )
}

const FrontOfCard2 = () => {
  return (
    <div className='absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0'>
      <Image
        src={imageContenu2}
        alt="Description de l'image"
        className='w-full  rounded order-2'
      />
    </div>
  )
}

export default (FrontOfCard, FrontOfCard2)
