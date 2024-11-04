import { createRecipe, deletereci, updatereci } from "../Controller/Admin/admin.js"
import { fetchbyid, fetchReci } from "../Controller/User/User.js";
import  express from 'express';
import { uploadFiles } from "../Middleware/Multer.js";

const router=express.Router()
router.post("/createreci",uploadFiles,createRecipe)
router.get("/allreci",fetchReci)
router.put("/update/:id",updatereci)
router.delete("/deletereci/:id",deletereci)
router.get("/getrecibyid/:id",fetchbyid)
export default router 

