import { useState, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { api } from '../services/api'

export function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  async function signIn({ email, password }) {
    try {
      const response = await api.post(
        '/sessions',
        { email, password },
        { withCredentials: true }
      )
      const { user } = response.data

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))

      setData({ user })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível entrar.')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@foodexplorer:user')
    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem('@foodexplorer:user')
    if (user) {
      setData({ user: JSON.parse(user) })
    }
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signOut, loading, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}
