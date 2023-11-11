import './Home.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <form>
      <div className='container-form'>
        <div className='information'>
          <div className='info-childs'>
            <h2>Bienvenido</h2>
            <p>¿No has creado un usuario? Regístrate</p>
            <Link to='/form'><button type='submit'>Registrarse</button></Link>
          </div>
        </div>
        <div className='form-information'>
          <div className='form-information-childs'>
            <div className='text'>
              <h2 className='crear_cuenta'>Iniciar Sesión</h2>
            </div>

            <div>
              <input type='text' placeholder='Correo electrónico' />
            </div>

            <div>
              <input type='password' placeholder='Contraseña' />
            </div>

            <div>
              <button type='submit' name='btn' id='btn_enviar'>Enviar</button>
            </div>
          </div>
        </div>
      </div>

    </form>

  )
}
