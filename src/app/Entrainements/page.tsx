import NavBar from '../components/NavBar'
import FooterHome from '../components/FooterHome'
import BabyTennis from '../components/BabyTennis'
import TxtEntrainements from '../components/TxtEntrainements'

export default function () {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <body className=''>
        <TxtEntrainements />
        <BabyTennis />
        <FooterHome />
      </body>
    </div>
  )
}
