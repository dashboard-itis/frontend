export const getAuthErrorMessage = (message: string) => {
  switch (message) {
    case 'Invalid credentials':
      return 'Неверная почта или пароль'

    case 'Account is not confirmed':
      return 'Подтвердите аккаунт через письмо на почте'

    case 'Unauthorized':
      return 'Сессия истекла. Войдите снова'

    case 'Failed to fetch':
      return 'Не удалось подключиться к серверу'

    default:
      return 'Произошла ошибка'
  }
}
