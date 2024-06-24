import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    expertiseLevel: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Expert'],
        required: true
    },
    image: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);

export default User;
