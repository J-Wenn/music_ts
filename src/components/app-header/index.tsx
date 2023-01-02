import type { FC } from 'react'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'

import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'

import headerTitles from '@/assets/data/header-titles.json'
import { IProps, ITitle } from './types'

const AppHeader: FC<IProps> = memo(() => {
  function showTitle(item: ITitle) {
    if (item.type === 'path') {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else if (item.type === 'link') {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWrapper className="nav">
      <div className="content">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="title-item" key={item.link}>
                  {showTitle(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <span className="input">
            <SearchIcon />
            <InputBase placeholder="音乐/视频/电台/用户" />
          </span>
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})

export default AppHeader
