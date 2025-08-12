// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";


// const connectDB = async () => {
//     try {
//         // const connectionInstance = await mongoose.connect(`{process.env.MONGODB_URI}/${DB_NAME}`)
//         await mongoose.connect(process.env.MONGODB_URI)
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
//     } catch (error) {
//         console.log("MONGODB connection error: ", error);
//         process.exit(1)
//     }
// }

// export default connectDB

import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        // Move the success log INSIDE the 'try' block
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error ", error);
        process.exit(1);
    }
}

export default connectDB

