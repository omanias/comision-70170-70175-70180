import mongoose from 'mongoose'

const userCollection = "usuarios"

const userSchema = new mongoose.Schema({
    nombre : String,
    apellido :String,
    email: String
})

const userModel = mongoose.model(userCollection,userSchema)

export default userModel