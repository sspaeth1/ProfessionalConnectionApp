const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    experience:{
        type:[]
    },
    title:{
        type:String
    },
    status:{
        type:String,
        required:true
    },
    company:{
        type:String,
    },
    website:{
        type:String
    },
    skills:{
        type:[String]
    },
    location:{
        type:String
    },
    bio:{
        type:String
    },
    githubusername:{
        type:String
    },
    social:{
        facebook:{
            type:String
        },
        twitter:{
            type:String
        }
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);