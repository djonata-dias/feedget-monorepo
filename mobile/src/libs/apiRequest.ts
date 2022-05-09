import { env } from "process";
import axios from "axios";

export const apiRequest = axios.create({
  baseURL: env.API_URL,
});
