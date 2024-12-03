import mongoose from "mongoose";
interface Users {
    firstName: String;
    lastName: String;
    username: String;
    email: String;
    password: String;
    isVerified?: String;
}
declare const User: mongoose.Model<Users, {}, {}, {}, mongoose.Document<unknown, {}, Users> & Users & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<Users, mongoose.Model<Users, any, any, any, mongoose.Document<unknown, any, Users> & Users & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Users, mongoose.Document<unknown, {}, mongoose.FlatRecord<Users>> & mongoose.FlatRecord<Users> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default User;
