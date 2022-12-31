import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = memo(() => {
  return <div>Recommend</div>
})

export default Recommend
