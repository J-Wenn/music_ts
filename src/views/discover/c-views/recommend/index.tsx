import { useAppDispatch } from '@/store'
import type { FC, ReactNode } from 'react'
import { memo, useEffect } from 'react'
import { fetchBannerDataAction } from './store'

import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'

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
    </RecommendWrapper>
  )
})

export default Recommend
