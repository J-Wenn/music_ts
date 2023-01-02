import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
  demo: number
}

const initialState: IInitialState = {
  demo: 100
}

const demo = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    changeDemoAction(state, { payload }: PayloadAction<number>) {
      state.demo = payload
    }
  }
})

export default demo.reducer
