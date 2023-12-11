import Image from 'next/image'
import logonavbar from '../../../public/image/logoENIGMA.png'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav
      className='flex items-center justify-between flex-wrap bg-orange-600 p-6'
      style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}
    >
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <svg
          className='fill-current h-8 w-8 mr-2'
          width='54'
          height='54'
          viewBox='0 0 54 54'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='../../../public/image/logoParatenn.png' />
        </svg>
        <Link href='/' className='font-semibold text-xl tracking-tight '>
          ESA-Tennis
        </Link>
      </div>
      <div className='block lg:hidden'>
        <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow'>
          <Link
            href='/Equipe'
            className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-zinc-950 mr-5'
          >
            Le club
          </Link>
          <a
            href=''
            className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-zinc-950  mr-5'
          >
            Les cours
          </a>
          <a
            href=''
            className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-zinc-950'
          >
            Blog
          </a>
        </div>
        <div>
          <a
            href=''
            className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0'
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
