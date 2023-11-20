import { IconEdit, IconTrash } from '@tabler/icons-react'
import './ToDo.css'
import { Link } from 'react-router-dom'

export const icono = () => {
  return <IconEdit />
}

export const icono2 = () => {
  return <IconTrash />
}

/* const { todosCount, pendingTodosCount } = useTodo() */

export const ToDo = () => {
  return (
    <main className='table'>
      <section className='table__header'>
        <h1>Gestión de tareas</h1>
        <div className='counter_todo'>
          <h4>Pendientes: </h4>
          <h4>N° de tareas: </h4>
        </div>
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
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarea de español</td>
              <td>Debo hacer...</td>
              <td>12-11</td>
              <td> <p className='status complete'>Completado</p></td>
              <td><IconEdit color='black' size={36} /></td>
              <td><IconTrash color='black' size={36} /></td>
            </tr>
            <tr>
              <td>Inglés</td>
              <td>Debo hacer...</td>
              <td>10-09</td>
              <td> <p className='status pending'>Pendiente</p></td>
              <td><IconEdit color='black' size={36} /></td>
              <td><IconTrash color='black' size={36} /></td>
            </tr>
            <tr>
              <td>Inglés</td>
              <td>Debo hacer...</td>
              <td>10-09</td>
              <td> <p className='status pending'>Pendiente</p></td>
              <td><IconEdit color='black' size={36} /></td>
              <td><IconTrash color='black' size={36} /></td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  )
}
