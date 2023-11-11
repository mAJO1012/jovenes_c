import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './Form.css'

export function Form () {
  const { handleSubmit, formState: { errors }, watch } = useForm()

  console.log(errors)

  return (

    <form
      class='form' onSubmit={handleSubmit((data) => {
        console.log(data)
      })}
    >

      <div className='container-form'>
        <div className='information'>
          <div className='info-childs'>
            <h2>Bienvenido</h2>
            <p>¿Ya tienes un usuario creado? Inicia sesión</p>
            <Link to='/'><button type='submit'>Iniciar Sesión</button></Link>
          </div>
        </div>
        <div className='form-information'>
          <div className='form-information-childs'>
            <div className='text'>
              <h2 className='crear_cuenta'>Crear una cuenta</h2>
            </div>

            <div>
              <input type='text' name='name' placeholder='Nombre' />
            </div>
            <div>
              <input type='text' name='lastName' placeholder='Apellido' />
            </div>
            <div>
              <input type='text' name='email' placeholder='Correo electrónico' />
            </div>
            <div>
              <input type='password' name='password' placeholder='Contraseña' />
            </div>

            <div>
              <button type='submit' name='btn' id='btn_enviar'>Enviar</button>
            </div>
          </div>
        </div>
      </div>
      <pre>
        {JSON.stringify(watch(), null, 2)}
      </pre>
    </form>

  )
}
