export const login = async (email: string, password: string) => {
  const formData = new URLSearchParams() //использую URLSearchParams так как мы реализуем OAuth2 а он принимает только application/x-www-form-urlencoded
  formData.append('username', email)
  formData.append('password', password)
  formData.append('grant_type', 'password') //для тиммейтов: это из OAuth2, что говорит бэку "я логинюсь через пароль"

  const response = await fetch('http://localhost:8000/api/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Failed to login')
  }

  return response.json()
}

export const register = async (data: {
  email: string
  password: string
  first_name: string
  last_name: string
  role: 'STUDENT' | 'CURATOR' | 'ADMIN'
}) => {
  const response = await fetch('http://localhost:8000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Failed to register')
  }

  return response.json()
}

// cгенерированно ИИ чтобы проверить без бэка, потом удалить!!!!!!!!!!!!!!!!!!1
// export const login = async (email: string, password: string) => {
//   await new Promise((res) => setTimeout(res, 500))

//   // ❌ неправильный логин
//   if (email !== 'admin@test.com' || password !== '12345678') {
//     throw new Error('Неверный логин или пароль')
//   }

//   // ✅ успешный логин
//   return {
//     access_token: 'fake-token',
//     scope: 'student', // меняй на 'student' или 'curator' чтобы тестить роли
//   }
// }

// export const register = async (data: any) => {
//   await new Promise((res) => setTimeout(res, 500))
//   return {}
// }
