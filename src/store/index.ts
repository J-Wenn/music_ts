import recommend from '@/views/discover/c-views/recommend/store'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import demo from './modules/demo'

const store = configureStore({
  reducer: {
    demo,
    recommend
  }
})

// const state = store.getState()
// type StateType = typeof state

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch

export default store
