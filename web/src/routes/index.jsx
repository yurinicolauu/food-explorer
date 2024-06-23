import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { useEffect } from 'react'
import { api } from '../services/api'

export function Routes() {
  const { user, loading, signOut } = useAuth()

  useEffect(() => {
    api.get('/users/validated').catch(error => {
      if (error.response?.status === 401) {
        signOut()
      }
    })
  }, [])

  if (loading) {
    return <div>Carregando...</div>
  }

  console.log(user)

  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
}
