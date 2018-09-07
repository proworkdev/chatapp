"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// define the schema for our user model
const messageSchema = new mongoose_1.default.Schema({
    receiverId: { type: String, ref: "User" },
    senderId: { type: String, ref: "User" },
    message: String,
    createAt: Date
}, { timestamps: true });
// create the model for users and expose it to our app
const Messages = mongoose_1.default.model("Messages", messageSchema);
exports.default = Messages;
//# sourceMappingURL=Messages.js.map