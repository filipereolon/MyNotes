import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
	const [data, setData] = useState('')

	async function signIn({ email, password }) {
		try {
			const response = await api.post('/sessions', { email, password })
			const { token, user } = response.data

			localStorage.setItem('@my-notes:user', JSON.stringify(user))
			localStorage.setItem('@my-notes:token', token)

      api.defaults.headers.Authorization = `Bearer ${token}`
			setData({ token, user })
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message)
			} else {
				alert('Failed to login')
			}
		}
	}

	async function updateProfile({ user, avatarFile }) {
		try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)
        const response = await api.patch('/users/avatar', fileUploadForm)
        user.avatar = response.data.avatar
      }
			await api.put('/users', user)
			localStorage.setItem('@my-notes:user', JSON.stringify(user))
			setData({ user, token: data.token })
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message)
			} else {
				alert('Failed to login')
			}
		}
	}

	function signOut() {
		localStorage.removeItem('@my-notes:user')
		localStorage.removeItem('@my-notes:token')
		setData('')
	}

	useEffect(() => {
		const token = localStorage.getItem('@my-notes:token')
		const user = localStorage.getItem('@my-notes:user')

		if (token && user) {
			api.defaults.headers.authorization = `Bearer ${token}`
			setData({ token, user: JSON.parse(user) })
		}
	}, [])

	return (
		<AuthContext.Provider value={{ signIn, updateProfile, signOut, user: data.user }}>{children}</AuthContext.Provider>
	)
}

function useAuth() {
	const context = useContext(AuthContext)

	return context
}

export { AuthProvider, useAuth }
