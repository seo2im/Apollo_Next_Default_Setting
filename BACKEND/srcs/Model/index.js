/*
*   Set DB Connection of 
*/
import mongoose from 'mongoose';
/*  
*   You must set your DB user_id & DB_password and port(default 27017).
*   If you don't set user, just set mongodb://localhost:27017
*/
const URL = `mongodb://${Your_DB_User_ID}:${Your_DB_Password}@localhost:${Your_DB_Port}/admin`

const dbConnect = async () => {
    mongoose.connect(URL, {
        dbName: "Your DB NAME", /* Set your db name */
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('DB Connected!')
    }).catch(err => {
        console.log(err)
    })
}

export default dbConnect
