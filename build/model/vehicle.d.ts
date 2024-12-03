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
declare const Vehicle: mongoose.Model<Vehicles, {}, {}, {}, mongoose.Document<unknown, {}, Vehicles> & Vehicles & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<Vehicles, mongoose.Model<Vehicles, any, any, any, mongoose.Document<unknown, any, Vehicles> & Vehicles & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Vehicles, mongoose.Document<unknown, {}, mongoose.FlatRecord<Vehicles>> & mongoose.FlatRecord<Vehicles> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Vehicle;
