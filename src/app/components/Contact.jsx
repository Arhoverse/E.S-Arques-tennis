import Image from 'next/image'

const Contact = () => {
  return (
    <div className='flex text-orange-600 font-bold items-center justify-center p-20'>
      <div className='bg-white p-10 rounded-md transition-all hover:bg-orange-500 hover:text-white'>
        <div className='text-xl p-4'>
          <h2>Contactez-nous !</h2>
        </div>
        <div className='underline p-4 text-xl'>
          <ul className='list-disc'>
            <li>
              <a
                href='https://www.facebook.com/groups/337947036235821/'
                target='_blank'
              >
                Notre Facebook
              </a>
            </li>
            <li>
              <a href='mailto:esatennis@9business.fr'>esatennis@9business.fr</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
