import { IconEdit } from '@tabler/icons-react'

export const Todoupdate = ({ todo, handleUpdateTodo }) => {
  return (
    <form>
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
              <input type='text' name='description_update' placeholder='Descripción' />
            </div>
            <div>
              <label htmlFor='d_e'>Fecha de finalización</label>
              <input type='date' name='finishDate_update' placeholder='Fecha de finalización' />
            </div>

            <div>
              <button type='submit' name='btn_update' id='btn_enviar'><IconEdit color='black' size={36} /></button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
