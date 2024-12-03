import mongoose from "mongoose";
const vehicleSchema = new mongoose.Schema({
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
});
vehicleSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = document._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});
const Vehicle = mongoose.model("vehicle", vehicleSchema);
export default Vehicle;
