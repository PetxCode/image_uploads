import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg");
  },
});

export const uploadSingle = multer({
  storage: storage,

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

export const uploadMultiple = multer({ storage: storage }).array(
  "multipleImage",
  8
);
