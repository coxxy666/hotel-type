import express  from "express";
import Hotel_Service from "../include/functions";
import

const authenticate = (req : Request, res : Response, next : NextFunction ) => {
  req.name = "User";
  next();
};

export default new authenticate();
