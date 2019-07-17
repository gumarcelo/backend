'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = new _mongoose2.default.Schema({
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
    tasks: [{
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
    }]
});

exports.default = _mongoose2.default.model('Users', User); //primeiro param: nome da coleção de dados (que aparece no db), segundo param: schema