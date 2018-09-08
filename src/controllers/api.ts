import * as passport  from 'passport';
"use strict";

import async from "async";
import request from "request";
import graph from "fbgraph";
import { default as Messages } from "../models/Messages";
import { default as User } from "../models/User";
import { Response, Request, NextFunction } from "express";


/**
 * GET /api
 * List of API examples.
 */

export let getApi = (req: Request, res: Response) => {
  //let userid = req.user.id;
  var userid =  req.session.passport.user;
  if(userid){
    User.findOne({ _id: userid }, (err, existingUser: any) => {
      res.render("api/index", {
        title: "API Examples",
        user: existingUser
      });
    })
  }
  else{
    res.redirect("/login")
  }
};

/**for Test */

export let getApis = (req: Request, res: Response) => {
  console.log("test");
  res.render("api/test", {
    title: "API Examplessss"
  });
};

/**
 * GET /api/chaT
 * chat API example.
 */
export let getChat = (req: Request, res: Response, next: NextFunction) => {
console.log(req.params.userid)
var chatUID = req.params.userid; //get chat id pass from profile chat button
var receiver =  User.findOne({ _id: chatUID });
console.log("chatUID==>>>>",chatUID);
console.log('receiverrr==>>', receiver);
Messages.find({}).populate(["receiverId", "senderId"]).exec((err, messages) => {
console.log('messgaes-->>', messages)
  res.render("api/chatUser", {
      sender: req.user, // get the user out of session and pass to template
      // receiver: receiver,
      messages: messages
  });
});
    
};


