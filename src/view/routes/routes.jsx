import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Admin } from '../pages/Admin'
import { Form } from '../pages/Form'
import { Layout } from '../components/Layout/Layout'
import { ToDo } from '../components/ToDo/ToDo'
import { ToDos } from '../components/ToDos/ToDos'

export const router = createBrowserRouter([
  {
    path: 'form',
    Component: Form
  },
  {
    path: 'toDo',
    Component: ToDo
  },
  {
    path: 'toDos',
    Component: ToDos
  },
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '',
        Component: Home
      },
      {
        path: 'admin',
        Component: Admin
      }
    ]
  }
])
