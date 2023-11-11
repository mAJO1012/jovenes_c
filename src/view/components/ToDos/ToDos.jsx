import './ToDos.css'

export const ToDos = () => {
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
              <input type='text' id='n_task' name='n_task' placeholder='Nombre' />
            </div>
            <div>
              <label htmlFor='desc'>Fecha de finalización</label>
              <input type='text' name='descript' id='desc' placeholder='Descripción' />
            </div>
            <div>
              <label htmlFor='d_e'>Fecha de finalización</label>
              <input type='date' name='date' id='d_e' placeholder='Fecha de finalización' />
            </div>
            <div>
              <label htmlFor='state'>Estado</label>
              <select name='state' id='state'>
                <option value='1'>Completada</option>
                <option value='2'>Pendiente</option>
              </select>
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
