import type { FC, ReactNode } from 'react'
import { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = memo(() => {
  return (
    <div>
      <div>导航</div>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
})

export default Discover
