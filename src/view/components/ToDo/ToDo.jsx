import './ToDo.css'
import { Link } from 'react-router-dom'

export const ToDo = () => {
  return (
    <main className='table'>
      <section className='table__header'>
        <h1>Gestión de tareas</h1>
        <div>
          <Link to='/toDos'><button type='submit' className='btn_plus'>+</button></Link>
        </div>
      </section>
      <section className='table__body'>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Fecha de finalización</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarea de español</td>
              <td>Debo hacer...</td>
              <td>12-11</td>
              <td> <p className='status complete'>Completado</p></td>
            </tr>
            <tr>
              <td>Inglés</td>
              <td>Debo hacer...</td>
              <td>10-09</td>
              <td> <p className='status pending'>Pendiente</p></td>
            </tr>
            <tr>
              <td>Inglés</td>
              <td>Debo hacer...</td>
              <td>10-09</td>
              <td> <p className='status pending'>Pendiente</p></td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  )
}
