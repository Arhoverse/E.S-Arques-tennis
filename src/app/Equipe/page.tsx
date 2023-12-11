import NavBar from '../components/NavBar'
import Direction from '../components/Direction'
import FooterHome from '../components/FooterHome'
import TextDirection from '../components/TextDirection'
import EquipePedago from '../components/EquipePedago'
import TextPedago from '../components/TextPedago'

export default function Equipet() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <body className=''>
        <TextDirection />
        <Direction />
        <TextPedago />
        <EquipePedago />
        <FooterHome />
      </body>
    </div>
  )
}
