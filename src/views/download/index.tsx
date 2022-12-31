import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Download: FC<IProps> = memo(() => {
  return <div>Download</div>
})

export default Download
