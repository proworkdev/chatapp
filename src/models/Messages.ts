import bcrypt from "bcrypt-nodejs";
import crypto from "crypto";
import mongoose from "mongoose";

// define the schema for our user model
const messageSchema = new mongoose.Schema({
    receiverId: { type: String, ref: "User" },
    senderId: { type: String, ref: "User" },
    message: String,
    createAt: Date
  }, { timestamps: true });
// create the model for users and expose it to our app
const Messages = mongoose.model("Messages", messageSchema);
export default Messages;









