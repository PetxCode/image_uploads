import { Document, Schema, model } from "mongoose";

interface iPix {
  picture: string;
  pictures: Array<string>;
}

interface iPixData extends iPix, Document {}

const pixModel = new Schema<iPixData>(
  {
    picture: {
      type: String,
    },
    pictures: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export default model<iPixData>("pictures", pixModel);
