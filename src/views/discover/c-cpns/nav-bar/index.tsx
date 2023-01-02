import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { NavWrapper } from './style'

import discoverMenu from '@/assets/data/discover-menu.json'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = memo(() => {
  return (
    <NavWrapper>
      <div className="nav">
        {discoverMenu.map((item) => {
          return (
            <div className="menu-item" key={item.link}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavWrapper>
  )
})

export default NavBar
