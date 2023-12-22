import Image from 'next/image'
import imageContenu from '../../../public/image/babyTennis.png'
import FrontOfCard from './FrontOfCard'
import BackOfCard from './BackOfCard'
import FrontOfCard2 from './FrontOfCard'
import BackOfCard2 from './BackOfCard'

const BabyTennis = () => {
  return (
    <>
      <div
        style={{ display: 'flex', flexDirection: 'row' }}
        className='pt-12 pl-6'
      >
        <div className='relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card mt-20 ml-20 '>
          <FrontOfCard />
          <BackOfCard />
        </div>
        <div className='relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card mt-20 ml-20 '>
          <FrontOfCard2 />
          <BackOfCard2 />
        </div>
        <div className='relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card mt-20 ml-20 '>
          <FrontOfCard />
          <BackOfCard />
        </div>
      </div>
    </>
  )
}

export default BabyTennis
