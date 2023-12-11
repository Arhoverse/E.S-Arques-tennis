import NavBar from './components/NavBar'
import Contenu2 from './components/Contenu2'
import Blog from './components/Blog'
import Contenu1 from './components/Contenu1'
import FooterHome from './components/FooterHome'
import Equipe from './components/Equipe'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <body className=''>
        <Contenu1 />
        <Contenu2 />
        <Equipe />
        <Blog />
        <Contact />
        <FooterHome />
      </body>
    </>
  )
}
