import { useAppSelector } from '@/store'
import type { FC, ReactNode } from 'react'
import { memo, useRef, useState } from 'react'
import { shallowEqual } from 'react-redux'

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = memo(() => {
  const [realIndex, setRealIndex] = useState<number>(7)

  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  const bgImage = banners[realIndex]?.imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper
      style={{
        background: `url(${bgImage}) center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Swiper
            loop={true}
            modules={[Navigation, EffectFade, Autoplay, Pagination]}
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
            navigation={{
              nextEl: nextRef.current,
              prevEl: prevRef.current
            }}
            onActiveIndexChange={({ realIndex }) => setRealIndex(realIndex)}
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
          <button className="btn left" ref={prevRef}></button>
          <button className="btn right" ref={nextRef}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

export default TopBanner
