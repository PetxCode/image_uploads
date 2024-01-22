import { connect } from "mongoose";

const URL: string = "mongodb://localhost:27017/uploadDB";
export const dbConfig = async () => {
  try {
    await connect(URL)
      .then(() => {
        console.log("DB connected...");
      })
      .catch((err) => console.error());
  } catch (error) {
    return error;
  }
};
