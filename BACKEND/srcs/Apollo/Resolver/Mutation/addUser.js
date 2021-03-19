import { User } from '../../../Model/Schema'

const addUser = async (_, { id, password }) => {
    try {
        const user = new User({ 
            id: id, 
            password: password,
        })                
        const result = await user.save();
        return result
    } catch (err) {
        console.log(err);
        throw err
    }
}

export default addUser
