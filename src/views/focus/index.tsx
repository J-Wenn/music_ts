import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Focus: FC<IProps> = memo(() => {
  return <div>Focus</div>
})

export default Focus
