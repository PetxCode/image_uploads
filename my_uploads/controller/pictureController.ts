import { Request, Response } from "express";
import cloudinary from "../utils/cloudinary";
import pictureModel from "../model/pictureModel";
import streamifier from "streamifier";

export const uploadSinglePictureStreamifier = async (
  req: any,
  res: Response
) => {
  try {
    let streamUpload = (req: any) => {
      return new Promise((resolve, reject) => {
        let stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });

        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    async function upload(req: any) {
      let result = await streamUpload(req);
      return result;
    }

    const { secure_url }: any = await upload(req);

    const picture = await pictureModel.create({
      picture: secure_url,
    });

    return res.status(201).json({
      message: "uploading picture done",
      data: picture,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error uploading",
      status: 404,
    });
  }
};

export const uploadSinglePicture = async (req: any, res: Response) => {
  try {
    const { secure_url } = await cloudinary.uploader.upload(req.file.path);

    const picture = await pictureModel.create({
      picture: secure_url,
    });

    return res.status(201).json({
      message: "uploading picture done",
      data: picture,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error uploading",
      status: 404,
    });
  }
};

export const uploadMultiplePicture = async (req: any, res: Response) => {
  try {
    const data: any = [];

    for (let i in req.files) {
      const { secure_url } = await cloudinary.uploader.upload(
        req.files[i].path
      );

      data.push(secure_url);
    }

    const picture = await pictureModel.create({
      pictures: data,
    });

    return res.status(201).json({
      message: "uploading multiple picture done",
      data: picture,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error uploading",
      status: 404,
    });
  }
};

export const getAllPicture = async (req: any, res: Response) => {
  try {
    const picture = await pictureModel.find();
    return res.status(200).json({
      message: "get picture done",
      data: picture,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error uploading",
      status: 404,
    });
  }
};
