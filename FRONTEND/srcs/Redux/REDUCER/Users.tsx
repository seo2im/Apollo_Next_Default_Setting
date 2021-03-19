/*
    Define Action
*/
export const SAVE = 'USERS/SAVE' as const
/*
    Define Action state type & Action function type
*/
export type UsersAction = ReturnType<typeof UsersSave>
export type UserState = {
    id: string
    password: string
}
export type UsersState = UserState[]
/*
    Define Action Function
*/
export const UsersSave = (users: UsersState) => ({
    type: SAVE,
    payload: users,
})
/*
    Define InitState
*/
const initialState: UsersState = []
/*
    Define Reducer
*/
const reducer = (state: UsersState = initialState, action: UsersAction) => {
    switch (action.type) {
        case SAVE:
            return action.payload
        default:
            return state
    }
}

export default reducer
