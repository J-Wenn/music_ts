import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { AreaWrapper, HeaderLeft, HeaderRight } from './style'

interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  todo?: string
}

const AreaHeader: FC<IProps> = memo((props: IProps) => {
  const { title, keywords = [], todo = '/' } = props

  return (
    <AreaWrapper className="sprite_02">
      <HeaderLeft>
        <h3 className="hot-title">{title}</h3>
        <div className="keywords">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <a href="todo">{item}</a>
                <span className="line">|</span>
              </div>
            )
          })}
        </div>
      </HeaderLeft>
      <HeaderRight>
        <Link to={todo}>
          <i className="icon"></i>
          更多
        </Link>
      </HeaderRight>
    </AreaWrapper>
  )
})

export default AreaHeader
