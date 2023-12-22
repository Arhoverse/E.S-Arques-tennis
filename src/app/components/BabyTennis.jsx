import Image from 'next/image'
import imageContenu from '../../../public/image/babyTennis.png'
import FrontOfCard from './FrontOfCard'
import BackOfCard from './BackOfCard'
import FrontOfCard2 from './FrontOfCard'
import BackOfCard2 from './BackOfCard'

const BabyTennis = () => {
  return (
    <>
      <div className='flex flex-row pl-6'>
        <div className='relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card mt-5 ml-20 '>
          <FrontOfCard />
          <BackOfCard />
        </div>
        <div className='relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card mt-5 ml-20 '>
          <FrontOfCard2 />
          <BackOfCard />
        </div>
        <div className='relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card mt-5 ml-20 '>
          <FrontOfCard />
          <BackOfCard />
        </div>
      </div>
      <div className='flex flex-row pl-6'>
        <div className='relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card mt-24 ml-20 '>
          <FrontOfCard />
          <BackOfCard />
        </div>
        <div className='relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card mt-24 ml-20 '>
          <FrontOfCard />
          <BackOfCard />
        </div>
        <div className='relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card mt-24 ml-20 mb-10'>
          <FrontOfCard />
          <BackOfCard />
        </div>
      </div>
    </>
  )
}

export default BabyTennis
