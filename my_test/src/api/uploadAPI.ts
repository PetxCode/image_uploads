import axios from "axios";

const URL: string = "http://localhost:2277/single";

export const uploadSingleImage = async (data: any) => {
  try {
    const config: any = {
      "Content-Type": "multipart/form-data",
    };
    return axios.post(URL, data, config).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
