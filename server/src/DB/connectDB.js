import mongoose from "mongoose";


const connectDB = async()=>{
    const url = process.env.MONGO_URI;
    if(!url || url===""){
        console.log("URL not found for the DB");
    }

    try {

        const connection = await mongoose.connect(url);
        console.log("Mongo DB running on - ", connection.connection.host);

        
    } catch (error) {
        console.log("Mongoose connection error",error)

    }
}

export default connectDB