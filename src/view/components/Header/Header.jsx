import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <h1>Gestión de tareas</h1>

      <ul>
        <li><Link to='/'>Inicio de sesión</Link></li>
        <li><Link to='/form'>Registro</Link></li>
      </ul>
    </header>
  )
}
