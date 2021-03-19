/*
    In next, Redux store have to be wrapped, 
    so use wrapper in _app.tsx
*/
import { createWrapper } from 'next-redux-wrapper'
import { createStore } from 'redux'
import reducer from './REDUCER'

const configStore = () => createStore(reducer)

const wrapper = createWrapper(configStore, {
    debug: process.env.NODE_ENV === 'development',
})

export default wrapper
