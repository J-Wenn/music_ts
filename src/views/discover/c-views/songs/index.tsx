import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = memo(() => {
  return <div>Songs</div>
})

export default Songs
