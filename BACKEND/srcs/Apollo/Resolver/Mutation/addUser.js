import { User } from '../../../Model/Schema'

const addUser = async (_, { login, password }) => {
    try {
        
        const user = new User({ 
            login: login, 
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
