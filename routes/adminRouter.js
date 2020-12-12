const express = require("express");
const adminController = require("../controllers/adminController.js");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});  


const adminRouter = express.Router();



adminRouter.get("/update/:id", adminController.getUpdateFood);
adminRouter.post("/update", adminController.postUpdateFood);
adminRouter.get("/create", adminController.getCreateFood);
adminRouter.post("/create", adminController.postCreateFood);
adminRouter.get("/", adminController.showAdminTable);

module.exports = adminRouter;