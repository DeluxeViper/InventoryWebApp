/** @format */

const axios = require("axios");

const baseUrl = "http://localhost:8080/api/inventory";

export const getItems = () => {
  return axios.get(baseUrl);
};

export const getItem = (id) => {
  return axios.get(`${baseUrl}/${id}`);
};

export const deleteItem = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export const updateItem = (id, item) => {
  return axios({
    method: "PUT",
    url: `${baseUrl}/${id}`,
    data: {
      productName: item.productName,
      quantity: item.quantity,
      price: item.price,
      createdAt: item.createdAt,
    },
    headers: {
      Authorization: ``,
      "Content-Type": "application/json",
    },
  });
};

export const createItem = (item) => {
  return axios({
    method: "POST",
    url: `${baseUrl}`,
    data: {
      productName: item.productName,
      quantity: item.quantity,
      price: item.price,
      createdAt: item.createdAt,
    },
    headers: {
      Authorization: ``,
      "Content-Type": "application/json",
    },
  });
};
