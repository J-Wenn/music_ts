import { useAppSelector } from '@/store'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { shallowEqual } from 'react-redux'

import { Autoplay, EffectFade, Pagination } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = memo(() => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  const swiper = useSwiper()

  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Swiper
            loop={true}
            modules={[EffectFade, Autoplay, Pagination]}
            pagination={{
              clickable: true
            }}
            autoplay={{
              pauseOnMouseEnter: true
            }}
            effect="fade"
            fadeEffect={{
              crossFade: true
            }}
          >
            {banners.map((item) => {
              return (
                <SwiperSlide className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt="" />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button
            className="btn left"
            onClick={() => swiper.slidePrev()}
          ></button>
          <button
            className="btn right"
            onClick={() => swiper.slideNext()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

export default TopBanner
