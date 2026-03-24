import { ReactElement } from 'react'

// TODO: реализация логики приватного роута
type Props = {
  children: ReactElement
  roles?: string[]
}

export const RoleRoute = ({ children }: Props) => {
  return children
}
