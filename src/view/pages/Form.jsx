import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './Form.css'
import { useState } from 'react'

export function Form () {
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",

  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleForm = (event) => {
    event.preventDefault()
    console.log(values)
  }
  return (
    <form  onSubmit={handleForm}>
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
              <input type='text' name='name' value={values.name} placeholder='Nombre' onChange={handleInputChange} />
            </div>
            <div>
              <input type='text' name='lastName' value={values.lastName} placeholder='Apellido' onChange={handleInputChange}/>
            </div>
            <div>
              <input type='text' name='email' value={values.email} placeholder='Correo electrónico' onChange={handleInputChange}/>
            </div>
            <div>
              <input type='password' name='password' value={values.password} placeholder='Contraseña' onChange={handleInputChange}/>
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
