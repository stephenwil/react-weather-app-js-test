import axios from "axios";
import { defaultsDeep } from "lodash";

const defaultOptions = {
  method: "get",
  responseType: "json",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

export const request = (url, options = defaultOptions) => {
  const actualOptions = defaultsDeep(options, defaultOptions);
  options.url = url;
  return axios(actualOptions);
};