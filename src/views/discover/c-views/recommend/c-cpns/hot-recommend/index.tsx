import AreaHeaderV1 from '@/components/area-header-v1'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { HotWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = memo(() => {
  return (
    <HotWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
        todo="/discover/songs"
      />
      HotRecommend
    </HotWrapper>
  )
})

export default HotRecommend
