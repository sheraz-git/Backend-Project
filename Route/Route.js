const express=require("express");
const router = express.Router();
const cont=require("./../Controller/controller");
const middle=require("./../Middleware/Middleware");
router.post("/login",cont.login);
router.post("/signup",middle.auth,cont.signup);
router.get("/view",cont.view);
module.exports = router;

