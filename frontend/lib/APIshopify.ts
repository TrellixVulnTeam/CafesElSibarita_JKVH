import axios from "axios";

export const productoShopify = axios.create({
	baseURL: "http://localhost:7000",
});
