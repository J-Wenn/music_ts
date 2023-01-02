import type { ReactNode } from 'react'

export interface IProps {
  children?: ReactNode
}

export interface ITitle {
  title: string
  type: string
  link: string
}
