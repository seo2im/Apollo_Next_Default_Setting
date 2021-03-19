/*
*   Set your DB Schema
*   Reference : https://mongoosejs.com/docs/guide.html
*/

import { model, Schema }from 'mongoose'

const User = new Schema({
    id: { type: String, required: true, unique: true},
    password: { type: String, required: true },
})

export default model('User', User, 'User')
