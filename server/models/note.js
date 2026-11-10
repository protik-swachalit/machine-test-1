const mongoose = require('mongoose');

const NoteSchema= new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.export= mongoose.model('Note',NoteSchema)