import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        require: true
    }
}, {collection: 'user', timestamps: {createdAt: 'issued', updatedAt: 'modified'}})

export default mongoose.model('user', userSchema);