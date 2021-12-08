import { writable } from "svelte/store";

export const products = writable([])
const fetchProducts = async () => {
  const url = "https://fakestoreapi.com/products"
  const res = await fetch(url);
  const data = await res.json()

  products.set(data)
}

fetchProducts();
