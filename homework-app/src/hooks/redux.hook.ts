import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"

import { RootState } from "../state/root.reducer"
import { AppDispatch } from "../state/root.state"

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
