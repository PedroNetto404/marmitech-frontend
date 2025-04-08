// services/api.ts
import axios from "axios";
import { getKeycloakToken } from "./keycloak";

const { NEXT_PUBLIC_API_BASE_URL } = process.env;

export const api = axios.create({
  baseURL: NEXT_PUBLIC_API_BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const token = await getKeycloakToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
