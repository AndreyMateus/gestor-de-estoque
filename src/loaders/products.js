export default function loadProducts() {
    const products = JSON.parse(localStorage.getItem("products"));
    return products;
};