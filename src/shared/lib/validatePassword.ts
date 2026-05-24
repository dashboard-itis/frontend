export const validatePassword = (password: string): string | null => {
  if (password.length < 8) {
    return 'Пароль должен содержать минимум 8 символов'
  }

  if (!/[A-Za-zА-Яа-я]/.test(password)) {
    return 'Пароль должен содержать буквы'
  }

  if (!/\d/.test(password)) {
    return 'Пароль должен содержать цифры'
  }

  return null
}
