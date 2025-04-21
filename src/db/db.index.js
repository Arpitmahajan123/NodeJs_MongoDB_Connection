// 2nd Approach For Connecting To DataBase.
import mongoose from 'mongoose';
import { DB_Name } from '../constants.js';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_Name}`
    );
    console.log('MongoDB Is Connected !!!');
  } catch (error) {
    console.log('MONGODB Connection Error', error);
    process.exit(1);
  }
};

export default connectDB;
