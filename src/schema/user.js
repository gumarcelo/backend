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
            desc: {
                type: String
            },
            status: {
                type: String,
                enum: ['trash', 'done', 'open'],
                default: 'open'
            },
            dateCreated: {
                type: Date
            },
            dateLimit: {
                type: Date
            }
        }
    ]
})

export default mongoose.model('Users', User) //primeiro param: nome da coleção de dados (que aparece no db), segundo param: schema