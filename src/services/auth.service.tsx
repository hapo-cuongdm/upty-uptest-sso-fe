import { STATUS_CODE } from "../constants/common";
import { apiService } from "./api.service";

export const login = (params: any) => {
  // return apiService.post("/login", params);
  return new Promise((resolve, reject) => {
    apiService.post("/login", params).then((response: any) => {
      if (response.status === STATUS_CODE.SUCCESS) {
        resolve(response.data);
      }
    }).catch((error) => {
      reject(error);
    })
  })
}
