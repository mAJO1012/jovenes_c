import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Form } from '../pages/Form'
import { Layout } from '../components/Layout/Layout'
import { ToDo } from '../pages/ToDo/ToDo'
import { ToDos } from '../pages/ToDos/ToDos'
import { ProtectedRoute } from './ProtectedRoute'

export const router = createBrowserRouter([
  {
    path: 'form',
    Component: Form
  },
  {
    path: '/',
    Component: Home
  },
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '',
        element:
  <ProtectedRoute>
    <ToDo />
    <ToDos />
  </ProtectedRoute>
      }
    ]
  }
])
