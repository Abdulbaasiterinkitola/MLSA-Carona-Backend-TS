import mongoose from "mongoose";

interface Users {
    firstName: String;
    lastName: String;
    username: String;
    email: String;
    password: String;
    isVerified?: String;
}

const userSchema = new mongoose.Schema<Users>({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },

    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    isVerified: {
        type: Boolean,
        default: false
    }

})

userSchema.set("toJSON", {
    transform: (document: mongoose.Document & { _id: mongoose.Types.ObjectId; __v: number }, returnedObject: any) => {
        returnedObject.id = document._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const User = mongoose.model("user", userSchema)

export default User;