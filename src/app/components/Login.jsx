import Image from 'next/image'

const Login = () => {
  return (
    <div className='background:white display:flex align-items:center justify-content:center height:100vh'>
      <div className='width: 300px padding: 20px border: 1px solid #ccc border-radius: 8px background-color: #fff'>
        <h1>Connecte toi !</h1>
        <form>
          <label>
            Nom d'utilisateur:
            <input type='text' />
          </label>
          <br />
          <label>
            Mot de passe:
            <input type='password' />
          </label>
          <br />
          <button type='button'>Se connecter</button>
        </form>
      </div>
    </div>
  )
}

export default Login
