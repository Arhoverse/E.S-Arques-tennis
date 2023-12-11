import Image from 'next/image'
import imageContenu from '../../../public/image/Gery.jpg'

const Direction = () => {
  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        <div className='card w-96 bg-base-100 shadow-xl max-w-xs transition dura0tion-300 ease-in-out hover:scale-110 ml-32 '>
          <figure>
            <Image src={imageContenu} alt='Géry' />
          </figure>
          <div className='card-body'>
            <h1 className='card-title'>Géry Mailly</h1>
            <h2>Président</h2>
            <p className='italic'>mot du président</p>
            <div className='card-actions justify-end'></div>
          </div>
        </div>
        <div className='card w-96 bg-base-100 shadow-xl max-w-xs transition dura0tion-300 ease-in-out hover:scale-110  ml-20'>
          <figure>
            <img
              src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
              alt='Shoes'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'></div>
          </div>
        </div>
        <div className='card w-96 bg-base-100 shadow-xl max-w-xs transition dura0tion-300 ease-in-out hover:scale-110 ml-8'>
          <figure>
            <img
              src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
              alt='Shoes'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Direction
