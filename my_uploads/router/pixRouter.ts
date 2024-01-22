import { Router } from "express";
import { uploadMultiple, uploadSingle } from "../utils/multer";
import {
  getAllPicture,
  uploadMultiplePicture,
  uploadSinglePicture,
  uploadSinglePictureStreamifier,
} from "../controller/pictureController";

import multer from "multer";
const singleStream = multer({
  fileFilter: async function (req: any, file: any, callback: any) {
    var ext: any = file.mimetype;

    if (
      ext !== "image/jpeg" &&
      ext !== "image/jpg" &&
      ext !== "image/gif" &&
      ext !== "image/png"
    ) {
      return callback(new Error("Only images are allowed"));
    }
    // I want next function to validate real ext of files here.
    callback(null, true);
  },

  limits: { fileSize: 100000 },
}).single("singleImage");

const router: Router = Router();

router.route("/single").post(uploadSingle, uploadSinglePicture);
router
  .route("/single-stream")
  .post(singleStream, uploadSinglePictureStreamifier);

router.route("/multiple").post(uploadMultiple, uploadMultiplePicture);

router.route("/get-all").get(getAllPicture);

export default router;
