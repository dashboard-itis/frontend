//TODO: пока эндпоинтов нет в бэке, потом меняем также на анастоящие
import { USE_MOCKS } from '../config/config'
import { privacyPolicyMock } from '../mocks/privacy'

export const getPrivacyPolicy = async (groupId: number) => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) return privacyPolicyMock
}

export const updatePrivacyPolicy = async (groupId: number) => {
  //TODO: удалить перед релизом
  if (USE_MOCKS) return true
}
