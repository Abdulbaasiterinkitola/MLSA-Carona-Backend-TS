import mongoose from "mongoose";

interface Vehicles {
    carName: string;
    driver: string;
    model?: string;
    colour?: string;
    plateNumber: string;
    numberOfSeats?: number;
    AC: boolean;
    isLicenced: boolean;
}

const vehicleSchema = new mongoose.Schema<Vehicles>({
    carName: {
        type: String
    },

    driver: {
        type: String,
        required: true
    },

    model: {
        type: String
    },

    colour: {
        type: String
    },

plateNumber: {
    type: String,
    required: true,
    unique: true
},

AC: {
    type: Boolean
},

isLicenced: {
    type: Boolean
},

})

vehicleSchema.set("toJSON", {
    transform: (document: mongoose.Document & { _id: mongoose.Types.ObjectId; __v: number }, returnedObject: any) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Vehicle = mongoose.model("vehicle", vehicleSchema)

export default Vehicle;