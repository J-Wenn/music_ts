import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Mine: FC<IProps> = memo(() => {
  return <div>Mine</div>
})

export default Mine
