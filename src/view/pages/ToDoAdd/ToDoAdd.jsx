import { IconArrowLeft } from '@tabler/icons-react'
import './ToDoAdd.css'
import { Link } from 'react-router-dom'

export const icono = () => {
  return <IconArrowLeft />
}

export const ToDoAdd = () => {
  /*  const { handleNewTodo } = useTodo() */
  return (
    <form>
      <div>
        <Link to='/todo'><IconArrowLeft color='black' size={46} /></Link>
      </div>
      <div className='container'>
        <div className='form-info'>
          <div className='form-info-childs'>
            <div className='text'>
              <h3 className='crear_cuenta'>Agregar una tarea</h3>
            </div>

            <div>
              <label htmlFor='d_e'>Nombre</label>
              <input type='text' name='name' placeholder='Nombre' />
            </div>
            <div>
              <label htmlFor='desc'>Descripción</label>
              <input type='text' name='description' placeholder='Descripción' />
            </div>
            <div>
              <label htmlFor='d_e'>Fecha de finalización</label>
              <input type='date' name='finishDate' placeholder='Fecha de finalización' />
            </div>

            <div>
              <button type='submit' name='btn' id='btn_enviar'>Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
