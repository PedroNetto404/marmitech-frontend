"use client";
import { api } from "@/services/api";
import { CustomerPayload } from "@/types/customer";

const findById = async (id: string) => {
  const response = await api.get(`/customers/${id}`);
  return response.data;
}

const findAll = async () => {
  const response = await api.get("/customers");
  return response.data;
};

const create = async (customer: CustomerPayload) => {
  const response = await api.post("/customers", customer);
  return response.data;
};

const update = async (id: string, customer: CustomerPayload) => {
  const response = await api.put(`/customers/${id}`, customer);
  return response.data;
};

const remove = async (id: string) => {
  const response = await api.delete(`/customers/${id}`);
  return response.data;
};

export const CustomersApi = {
  findById,
  findAll,
  create,
  update,
  remove
};
