import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Djradio: FC<IProps> = memo(() => {
  return <div>Djradio</div>
})

export default Djradio
