import { useAppDispatch } from '@/store'
import type { FC, ReactNode } from 'react'
import { memo, useEffect } from 'react'
import { fetchBannerDataAction } from './store'

import HotRecommend from './c-cpns/hot-recommend'
import TopBanner from './c-cpns/top-banner'
import {
  Content,
  RecommendLeft,
  RecommendRight,
  RecommendWrapper
} from './style'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = memo(() => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [dispatch])

  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

export default Recommend
