import request from '@/services'
export const fetchBanner = () => {
  return request.get({
    url: '/banner'
  })
}
