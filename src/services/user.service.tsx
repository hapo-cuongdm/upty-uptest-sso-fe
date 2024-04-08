import { STATUS_CODE } from "../constants/common";
import { apiService } from "./api.service";

export const getApiUserList = () => {
  return new Promise((resolve, reject) => {
    apiService.get("/users").then((response: any) => {
      if (response.data.code === STATUS_CODE.SUCCESS) {
        resolve(response.data.data);
      } else {
        reject(response.data);
      }
    })
  })
}
