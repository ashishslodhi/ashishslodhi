import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import io from "socket.io";
// const DB = "mongodb://localhost:27017/ifp-db";
dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

export default connection;
