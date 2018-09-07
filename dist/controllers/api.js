"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const Messages_1 = __importDefault(require("../models/Messages"));
const User_1 = __importDefault(require("../models/User"));
/**
 * GET /api
 * List of API examples.
 */
exports.getApi = (req, res) => {
    //let userid = req.user.id;
    var userid = req.session.passport.user;
    User_1.default.findOne({ _id: userid }, (err, existingUser) => {
        res.render("api/index", {
            title: "API Examples",
            user: existingUser
        });
    });
};
exports.getApis = (req, res) => {
    console.log("test");
    res.render("api/test", {
        title: "API Examplessss"
    });
};
/**
 * GET /api/chaT
 * chat API example.
 */
exports.getChat = (req, res, next) => {
    console.log(req.params.userid);
    var chatUID = req.params.userid; //get chat id pass from profile chat button
    var receiver = User_1.default.findOne({ _id: chatUID });
    console.log("chatUID==>>>>", chatUID);
    console.log('receiverrr==>>', receiver);
    Messages_1.default.find({}).populate(["receiverId", "senderId"]).exec((err, messages) => {
        console.log('messgaes-->>', messages);
        res.render("api/chatUser", {
            sender: req.user,
            // receiver: receiver,
            messages: messages
        });
    });
};
//# sourceMappingURL=api.js.map