import { User } from '../../../Model/Schema'

const getUsers = async (_, _arg) => {
    try {
        const users = await User.find()
        return users
    } catch (err) {
        console.log(err)
        throw err
    }
}

export default getUsers