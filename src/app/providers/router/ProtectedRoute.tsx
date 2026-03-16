import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const PrivateRoute = ({ children }: Props) => {
  return children
}
