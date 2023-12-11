const FooterHome = () => {
  return (
    <footer className='bg-orange-600 text-white py-2 mt-7'>
      <div className=' mx-auto flex flex-col items-center'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold'>Mon Footer</h1>
          <p className='mt-2'>Description du footer ici.</p>
        </div>
        <div className='flex space-x-4'>
          <a href='#' className='hover:text-gray-300'>
            Accueil
          </a>
          <a href='#' className='hover:text-gray-300'>
            À propos
          </a>
          <a href='#' className='hover:text-gray-300'>
            Contact
          </a>
        </div>
        <div className='mt-8'>
          <p>&copy; 2023 Mon Entreprise. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterHome
