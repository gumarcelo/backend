import mongoose from 'mongoose'

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    tasks: [
        {
            title: {
                type: String
            },
            description: {
                type: String
            },
            status: {
                type: String
            },
            dateCreated: {
                type: Date,
                default: Date.now
            },
            dateLimit: {
                type: String
            }
        }
    ]
})

export default mongoose.model('Users', User) //primeiro param: nome da coleção de dados (que aparece no db), segundo param: schema