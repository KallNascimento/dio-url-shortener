import { config } from "config/Constants";
import mongoose from "mongoose";
export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_CONNECTION)
            console.log("DB Connected")
        } catch (error) {
            console.error(error)
            process.exit(1)
        }
    }
}