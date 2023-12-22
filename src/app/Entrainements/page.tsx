import NavBar from '../components/NavBar'
import FooterHome from '../components/FooterHome'
import BabyTennis from '../components/BabyTennis'

export default function () {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <body className=''>
        <BabyTennis />
        <FooterHome />
      </body>
    </div>
  )
}
