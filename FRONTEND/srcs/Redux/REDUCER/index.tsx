import { combineReducers } from 'redux'
import Users from './Users'
/*
    Combine reducers, this getting useSelector in 'react-redux'
*/
const rootReducer = combineReducers({
    Users,
})

export default rootReducer
/*
    This type use state format
    
    Ex>
        const state = useSelector((state: RootState) => state)
*/
export type RootState = ReturnType<typeof rootReducer>
