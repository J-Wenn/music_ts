import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchBanner } from './../service/index'

export const fetchBannerDataAction = createAsyncThunk(
  'banner',
  async (arg, { dispatch }) => {
    const { banners } = await fetchBanner()
    dispatch(changeBannerAction(banners))
  }
)

interface IRecommend {
  banners: any[]
}

const initialState: IRecommend = {
  banners: []
}

const recommend = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }: PayloadAction<any[]>) {
      state.banners = payload
    }
  }
})

export const { changeBannerAction } = recommend.actions

export default recommend.reducer
